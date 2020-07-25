import { useState, useEffect } from "react";

import { database } from "../firebase";
import { Category } from "../interfaces";

export const useCategories = () => {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    const categoriesConnection = database
      .collection("categories")
      // .where('date', '>', '2020-06-27')
      .onSnapshot((snapshot) => {
        const fetchedCategories = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));
        setCategories(fetchedCategories);
      });
    return () => {
      categoriesConnection();
    };
  }, []);

  const submitCategory = async (category: Category) => {
    database.collection("categories").add(category);
  };

  const deleteCategory = async (categoryId: string) => {
    try {
      await database.collection("categories").doc(categoryId).delete();
    } catch (error) {
      alert(error);
    }
  };

  return { categories, submitCategory, deleteCategory };
};
