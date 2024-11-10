import React, { useEffect, useState } from "react";
import {
  categoryBuildTree,
  addCategory,
  updateCategory,
  deleteCategory,
  updateParentForCategories
} from "../api/categorie";
import PageHeader from "@layout/PageHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Tree } from "antd";
const { DirectoryTree } = Tree;

const CategoryTree = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryNameNew, setCategoryNameNew] = useState("");
  const [action, setAction] = useState("create");
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // State for preview
  const [parentId, setParentId] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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

  useEffect(() => {
    fetchCategories();
  }, []);

  const onDragEnter = (info) => {
    console.log(info);

  };

  const onSelect = (keys, info) => {
    console.log("Trigger Select", keys, info);
  };
  const onExpand = (keys, info) => {
    console.log("Trigger Expand", keys, info);
  };

  const fetchCategories = async () => {
    try {
      const response = await categoryBuildTree();
      setCategories(formatCategory(response));
      setTreeData(formatTreeData(response));
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  const convert = (node, parentKey = "") => {
    const key = parentKey ? `${parentKey}-${node.id}` : node.id;
    return {
      title: node.name,
      key: key,
      isLeaf: node.children && node.children.length === 0,
      children: node.children?.map((child) => convert(child, key)) || [],
    };
  };

  const onDrop = async (info) => {
    const draggedNode = info.dragNode;
    const targetNode = info.node;
  
    if (!targetNode || !draggedNode) return;
  
    const draggedId = draggedNode.key.split("-").pop(); // Extract dragged category id
    const targetKeyParts = targetNode.key.split("-");
    const newParentId = targetKeyParts.slice(0, targetKeyParts.length - 1).join("-"); // Extract new parent id
    const newPos = targetNode.pos.split("-").pop(); // Get the drop position
    // Thay thế chuỗi rỗng bằng null
  const finalNewParentId = newParentId === "" ? null : newParentId;
    try {
      // Kiểm tra xem node mục tiêu đã mở chưa
      if (targetNode.dragOver) {
        // Nếu expanded = true, nghĩa là muốn làm con
        // Cập nhật parentId của node bị kéo
        await updateParentForCategories({
          categoryIds: [draggedId],
          newParentId: targetKeyParts[targetKeyParts.length - 1],
          newIndex: newPos,
        });
        toast.success("Category moved as a child successfully.");
      } else {
        // Nếu expanded = false, nghĩa là muốn hoán đổi vị trí
        await updateParentForCategories({
          categoryIds: [draggedId],
          newParentId: finalNewParentId,
          newIndex: newPos,
        });
        toast.success("Category position swapped successfully.");
      }
  
      // Cập nhật lại danh mục sau khi thực hiện xong
      fetchCategories(); // Re-fetch categories after update
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Error updating category.");
    }
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

  const updateTreeData = () => {
    setTreeData(formatTreeData(categories));
    setCategories(formatCategory(categories));
  };

  const handleActionChange = (e) => {
    setAction(e.target.value);
    resetForm();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Set preview image
    if (selectedFile) {
      setPreviewImage(URL.createObjectURL(selectedFile));
    } else {
      setPreviewImage(null);
    }
  };

  const handleAdd = async () => {
    if (parentId && categoryName && file) {
      try {
        const newCategory = await addCategory(parentId, categoryName, file);
        setCategories((prev) => addCategoryToTree(prev, newCategory, parentId));
        updateTreeData();
        resetForm();
        fetchCategories();
      } catch (error) {
        console.error("Failed to add category", error);
      }
    } else {
      toast.warn("Please fill in all fields for adding a category.");
    }
  };

  const handleEdit = async () => {
    if (selectedCategory && categoryNameNew) {
      try {
        const updatedData = new FormData();
        updatedData.append("category_name", categoryNameNew);
        updatedData.append("parent_id", selectedCategory.parentId || "");
        if (file) {
          updatedData.append("file", file);
        }

        await updateCategory(selectedCategory._id, {
          category_name: categoryNameNew,
          parent_id: selectedCategory.parentId || "",
          file: file,
        });
        setCategories((prev) =>
          updateCategoryInTree(prev, selectedCategory._id, categoryNameNew)
        );
        updateTreeData();
        resetForm();
        fetchCategories();
      } catch (error) {
        console.error("Failed to edit category", error);
      }
    } else {
      toast.warn("Please select a category and provide a new name.");
    }
  };

  const handleDelete = async () => {
    if (selectedCategory) {
      try {
        await deleteCategory(selectedCategory._id);
        setCategories((prev) =>
          deleteCategoryFromTree(prev, selectedCategory._id)
        );
        updateTreeData();
        resetForm();
        fetchCategories();
      } catch (error) {
        console.error("Failed to delete category", error);
      }
      setShowDeleteModal(false);
    }
  };

  const handleNodeClick = (nodeData) => {
    setSelectedCategory({
      id: nodeData.id,
      name: nodeData.name,
      parentId: nodeData.parentId,
    });
    setCategoryName(nodeData.name);
    setParentId(nodeData.parentId || "");
  };

  const addCategoryToTree = (categories, newCategory, parentId) => {
    return categories.map((cat) => {
      if (cat._id === parentId) {
        return { ...cat, children: [...(cat.children || []), newCategory] };
      }
      if (cat.children) {
        return {
          ...cat,
          children: addCategoryToTree(cat.children, newCategory, parentId),
        };
      }
      return cat;
    });
  };

  const updateCategoryInTree = (categories, categoryId, newName) => {
    return categories.map((cat) => {
      if (cat._id === categoryId) {
        return { ...cat, category_name: newName };
      }
      if (cat.children) {
        return {
          ...cat,
          children: updateCategoryInTree(cat.children, categoryId, newName),
        };
      }
      return cat;
    });
  };

  const deleteCategoryFromTree = (categories, categoryId) => {
    return categories.reduce((acc, cat) => {
      if (cat._id !== categoryId) {
        const updatedChildren = cat.children
          ? deleteCategoryFromTree(cat.children, categoryId)
          : [];
        return [...acc, { ...cat, children: updatedChildren }];
      }
      return acc;
    }, []);
  };

  const resetForm = () => {
    setCategoryName("");
    setCategoryNameNew("");
    setFile(null);
    setPreviewImage(null);
    setParentId("");
    setSelectedCategory(null);
  };

  return (
    <div>
      <PageHeader title="Category Management" />
      <ToastContainer />
      <div className="flex h-screen">
        <div className="w-1/4 p-4 h-full">
          <h2 className="mb-2 text-lg font-bold">Category Form</h2>
          <select
            value={action}
            onChange={handleActionChange}
            className="border p-2 mb-2 w-full"
          >
            <option value="create">Create</option>
            <option value="edit">Edit</option>
            <option value="delete">Delete</option>
          </select>

          <select
            value={parentId || selectedCategory?.id || ""}
            onChange={(e) => {
              const selectedCat = categories.find(
                (cat) => cat._id === e.target.value
              );
              if (action === "create") {
                setParentId(e.target.value);
                setSelectedCategory(null);
              } else if (action === "delete" || action === "edit") {
                setParentId(e.target.value);
                setSelectedCategory(selectedCat);
                setCategoryName(selectedCat ? selectedCat.category_name : "");
              }
            }}
            className="border p-2 mb-2 w-full"
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.category_name}
              </option>
            ))}
          </select>

          {action === "create" && (
            <>
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Category Name"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="border p-2 mb-2 w-full"
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mb-2 w-full h-32 object-cover"
                />
              )}
            </>
          )}

          {action === "edit" && (
            <>
              <input
                type="text"
                value={categoryNameNew}
                onChange={(e) => setCategoryNameNew(e.target.value)}
                placeholder="Edit Category Name"
                className="border p-2 mb-2 w-full"
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="border p-2 mb-2 w-full"
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mb-2 w-full h-32 object-cover"
                />
              )}
            </>
          )}

          <button
            onClick={
              action === "create"
                ? handleAdd
                : action === "edit"
                  ? handleEdit
                  : () => setShowDeleteModal(true)
            }
            className="bg-blue-500 text-white p-2 w-full"
          >
            {action.charAt(0).toUpperCase() + action.slice(1)} Category
          </button>
        </div>

        <div className="w-3/4 p-4">
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
      </div>

      {/* Delete Modal */}
      <Modal
        title="Confirm Delete"
        open={showDeleteModal}
        onOk={handleDelete}
        onCancel={() => setShowDeleteModal(false)}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this category?</p>
      </Modal>
    </div>
  );
};

export default CategoryTree;
