import React, { useEffect, useState } from "react";
import {
  categoryBuildTree,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../api/categorie";
import Tree from "react-d3-tree";
import PageHeader from "@layout/PageHeader";

const CategoryTree = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [treeData, setTreeData] = useState({});
  const [categoryName, setCategoryName] = useState("");
  const [categoryNameNew, setCategoryNameNew] = useState("");
  const [action, setAction] = useState("create");
  const [file, setFile] = useState(null);
  const [parentId, setParentId] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryBuildTree();
        setCategories(response);
        setTreeData(formatTreeData(response));
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);

  const formatTreeData = (categories) => ({
    name: "Categories",
    children: categories.map((category) => ({
      name: category.category_name,
      id: category._id,
      parentId: category.parent_id, // Added parentId to each node for future reference
      children: category.children
        ? formatTreeData(category.children).children
        : [],
    })),
  });

  const updateTreeData = () => {
    setTreeData(formatTreeData(categories));
  };

  const handleActionChange = (e) => {
    setAction(e.target.value);
    resetForm(); // Reset form when action changes
  };

  const handleAdd = async () => {
    if (parentId && categoryName && file) {
      try {
        const newCategory = await addCategory(parentId, categoryName, file);
        setCategories((prev) => addCategoryToTree(prev, newCategory, parentId));
        updateTreeData();
        resetForm();
      } catch (error) {
        console.error("Failed to add category", error);
      }
    } else {
      alert("Please fill in all fields for adding a category.");
    }
  };

  const handleEdit = async () => {
    console.log("selectedCategoryDa", selectedCategory, categoryName);
    if (selectedCategory && categoryName) {
      try {
        // Update the category with the new name and the parentId from the selectedCategory
        await updateCategory(selectedCategory.id, {
          category_name: categoryName, // Use the text from input
          parent_id: selectedCategory.parentId || null, // Update parentId if available
        });
        setCategories((prev) =>
          updateCategoryInTree(prev, selectedCategory.id, categoryName)
        );
        updateTreeData();
        resetForm();
      } catch (error) {
        console.error("Failed to edit category", error);
      }
    } else {
      alert("Please select a category and provide a new name.");
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

  const handleDelete = async () => {
    console.log("selectedCategoryDa", selectedCategory);
    if (selectedCategory) {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this category?"
      );
      if (confirmDelete) {
        try {
          await deleteCategory(selectedCategory);
          setCategories((prev) =>
            deleteCategoryFromTree(prev, selectedCategory.id)
          );
          updateTreeData();
          resetForm();
        } catch (error) {
          console.error("Failed to delete category", error);
        }
      }
    } else {
      alert("Please select a category to delete.");
    }
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
    setFile(null);
    setParentId("");
    setSelectedCategory(null); // Reset selected category
  };

  return (
    <div>
      <PageHeader title="Category Management" />
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

          {/* Dropdown to select existing categories for action */}
          <select
            value={
              action === "create" || action === "edit"
                ? parentId
                : selectedCategory?.id || ""
            }
            onChange={(e) => {
              const selectedCat = categories.find(
                (cat) => cat._id === e.target.value
              );
              console.log(selectedCat, "selectedCat");
              if (action === "create") {
                setParentId(e.target.value);
                setSelectedCategory(null); // Clear selection for create/edit
              } else if (action === "delete" || action === "edit") {
                setSelectedCategory(selectedCat._id);
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
                onChange={(e) => setFile(e.target.files[0])}
                className="border p-2 mb-2 w-full"
              />
            </>
          )}

          {action === "edit" && (
            <input
              type="text"
              value={categoryNameNew}
              onChange={(e) => setCategoryNameNew(e.target.value)}
              placeholder="Edit Category Name"
              className="border p-2 mb-2 w-full"
            />
          )}

          <button
            onClick={
              action === "create"
                ? handleAdd
                : action === "edit"
                ? handleEdit
                : handleDelete
            }
            className="bg-blue-500 text-white p-2 w-full"
          >
            {action.charAt(0).toUpperCase() + action.slice(1)} Category
          </button>
        </div>
        <div className="w-3/4 h-full flex items-center justify-center">
          <Tree data={treeData} onNodeClick={handleNodeClick} />
        </div>
      </div>
    </div>
  );
};

export default CategoryTree;
