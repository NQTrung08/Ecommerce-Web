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
import Loader from "@components/Loader";
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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await categoryBuildTree();
      setCategories(formatCategory(response));
      setTreeData(formatTreeData(response));
      setIsLoading(false)
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

    const draggedId = draggedNode.key.split("-").pop();
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
      } else {
        await updateParentForCategories({
          categoryIds: [draggedId],
          newParentId: finalNewParentId,
          newIndex: newPos,
        });
      }
      toast.success("Cập nhật ngành hàng thành công.");
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
            className="ml-2 text-green-darker"
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
    const selectedFile = e.fileList[0];
    if (!selectedFile) return;
    setFile(selectedFile.originFileObj);
    setPreviewImage(URL.createObjectURL(selectedFile.originFileObj));
  };

  const handleAction = async () => {
    if (!file && action !== "delete") {
      toast.error("Không có ảnh nào được chọn.");
      return;
    }
  
    try {
      if (action === "create" && categoryName) {
        await addCategory(selectedCategory.id ? selectedCategory.id : "", categoryName, file);
        toast.success("Tạo ngành hàng thành công.");
        setFile(null);
        setPreviewImage(null);
      } else if (action === "edit" && selectedCategory) {
        await updateCategory(selectedCategory.id, {
          parent_id: selectedCategory.parentId,
          category_name: categoryName,
          file,
        });
        toast.success("Đã cập nhật ngành hàng thành công.");
      } else if (action === "delete" && selectedCategory) {
        await deleteCategory(selectedCategory.id);
        toast.success("Đã xóa ngành hàng thành công.");
      }
      fetchCategories();
      resetForm();
      setShowActionModal(false);
      setIsLoading(false)
    } catch (error) {
      toast.error(`Lỗi khi ${action} ngành hàng.`);
    }
  };
  
  if (isLoading) return <Loader />;
  const resetForm = () => {
    setCategoryName("");
    setFile(null);
    setPreviewImage(null);
  };

  return (
    <div>
      <PageHeader title="Quản lý ngành hàng" />
      <ToastContainer />

      <div className="w-full">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => openModal("create")}
          className="mb-4"
        >
          Tạo ngành hàng mới
        </Button>

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
        title={
          action === "create"
            ? "Tạo ngành hàng mới"
            : action === "edit"
            ? "Chỉnh sửa ngành hàng"
            : action === "delete"
            ? "Xóa ngành hàng"
            : "Thao tác ngành hàng"
        }
        open={showActionModal}
        onOk={handleAction}
        onCancel={() => {
          setShowActionModal(false);
          resetForm();
        }}
        okText={action === "delete" ? "Xóa" : "Lưu"}
        cancelText="Hủy"
        style={{
          top: "50%",
          transform: "translateY(-100%) translateX(100%)",
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
            {previewImage && file && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-2 w-full h-32 object-cover"
              />
            )}
          </>
        )}
        {action === "delete" && <p>Bạn có chắc chắn muốn xóa ngành hàng này?</p>}
      </Modal>
    </div>
  );
};

export default CategoryTree;
