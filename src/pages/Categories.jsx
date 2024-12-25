import React, { useEffect, useState } from "react";
import {
  categoryBuildTree,
  addCategory,
  updateCategory,
  deleteCategory,
  updateParentForCategories,
} from "../api/categorie";
import PageHeader from "@layout/PageHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Tree, Input, Button, Upload } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const CategoryTree = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [showActionModal, setShowActionModal] = useState(false);
  const [action, setAction] = useState("create");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await categoryBuildTree();
      setCategories(formatCategory(response));
      setTreeData(formatTreeData(response));
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  const onDragEnter = (info) => {
    console.log(info);
  };

  const onSelect = (keys, info) => {
    console.log("Trigger Select", keys, info);
  };
  const onExpand = (keys, info) => {
    console.log("Trigger Expand", keys, info);
  };
  const onDrop = async (info) => {
    const draggedNode = info.dragNode;
    const targetNode = info.node;

    if (!targetNode || !draggedNode) return;

    const draggedId = draggedNode.key.split("-").pop(); // Extract dragged category id
    const targetKeyParts = targetNode.key.split("-");
    const newParentId = targetKeyParts
      .slice(0, targetKeyParts.length - 1)
      .join("-");
    const newPos = targetNode.pos.split("-").pop();
    const finalNewParentId = newParentId === "" ? null : newParentId;
    try {
      if (targetNode.dragOver) {
        await updateParentForCategories({
          categoryIds: [draggedId],
          newParentId: targetKeyParts[targetKeyParts.length - 1],
          newIndex: newPos,
        });
        toast.success("Category moved as a child successfully.");
      } else {
        await updateParentForCategories({
          categoryIds: [draggedId],
          newParentId: finalNewParentId,
          newIndex: newPos,
        });
        toast.success("Category position swapped successfully.");
      }

      fetchCategories();
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Error updating category.");
    }
  };

  const formatCategory = (categories, level = 0) => {
    let result = [];
    categories.forEach((category) => {
      result.push({
        category_name: category.category_name,
        _id: category._id,
        parent_id: category.parent_id,
        level: level,
      });
      if (category.children && category.children.length > 0) {
        result = result.concat(formatCategory(category.children, level + 1));
      }
    });
    return result;
  };

  const formatTreeData = (categories) => ({
    name: "Categories",
    children: categories.map((category) => ({
      name: category.category_name,
      id: category._id,
      parentId: category.parent_id,
      children: category.children
        ? formatTreeData(category.children).children
        : [],
    })),
  });

  const convert = (node, parentKey = "") => {
    const key = parentKey ? `${parentKey}-${node.id}` : node.id;
    return {
      title: (
        <span>
          {node.name}
          <PlusOutlined
            className="ml-2 text-blue-500"
            onClick={() => openModal("create", node)}
          />
          <EditOutlined
            className="ml-2 text-green-500"
            onClick={() => openModal("edit", node)}
          />
          <DeleteOutlined
            className="ml-2 text-rose-500"
            onClick={() => openModal("delete", node)}
          />
        </span>
      ),
      key: key,
      isLeaf: node.children && node.children.length === 0,
      children: node.children?.map((child) => convert(child, key)) || [],
    };
  };

  const openModal = (actionType, category = null) => {
    setAction(actionType);
    setSelectedCategory(category);
    setCategoryName(category ? category.name : "");
    setFile(null);
    setPreviewImage(null);
    setShowActionModal(true);
  };

  const handleFileChange = (e) => {
    console.log("File change event:", e);
    const selectedFile = e.fileList[0];
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }
    setFile(selectedFile.originFileObj);
    setPreviewImage(URL.createObjectURL(selectedFile.originFileObj)); // Preview the image
  };

  const handleAction = async () => {
    console.log("File in handleAction:", file);
    if (!file && action !== "delete") {
      toast.error("No file selected.");
      return; 
    }

    try {
      if (action === "create" && categoryName && selectedCategory) {
        await addCategory(selectedCategory.id, categoryName, file);
      } else if (action === "edit" && selectedCategory) {
        await updateCategory(selectedCategory.id, {
          parent_id: selectedCategory.parentId,
          category_name: categoryName,
          file,
        });
      } else if (action === "delete" && selectedCategory) {
        await deleteCategory(selectedCategory.id);
      }
      toast.success(`Category ${action}d successfully.`);
      fetchCategories();
      resetForm();
      setShowActionModal(false);
    } catch (error) {
      console.error(`Failed to ${action} category`, error);
      toast.error(`Failed to ${action} category.`);
    }
  };

  const resetForm = () => {
    setCategoryName("");
    setFile(null);
    setPreviewImage(null);
  };

  return (
    <div>
      <PageHeader title="Quản lý danh mục" />
      <ToastContainer />

      <div className="w-full"> 
        <Tree
          className="draggable-tree"
          multiple
          draggable
          defaultExpandAll
          showIcon={false}
          onDragEnter={onDragEnter}
          onDrop={onDrop}
          onSelect={onSelect}
          onExpand={onExpand}
          treeData={treeData?.children?.map((child) => convert(child))}
        />
      </div>

      <Modal
        title={`${action.charAt(0).toUpperCase() + action.slice(1)} Category`}
        open={showActionModal}
        onOk={handleAction}
        onCancel={() => {
          setShowActionModal(false);
          resetForm();
        }}
        okText={action === "delete" ? "Delete" : "Save"}
        cancelText="Cancel"
        style={{
          top: "50%", 
          transform: "translateY(-50%) translateX(70%)", 
        }}
      >
        {action !== "delete" && (
          <>
            <Input
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Category Name"
              className="mb-2"
            />
            <Upload beforeUpload={() => false} onChange={handleFileChange}>
              <Button>Tải hình ảnh</Button>
            </Upload>
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-2 w-full h-32 object-cover"
              />
            )}
          </>
        )}
        {action === "delete" && <p>Bạn có chắc chắn muốn xóa danh mục này?</p>}
      </Modal>
    </div>
  );
};

export default CategoryTree;
