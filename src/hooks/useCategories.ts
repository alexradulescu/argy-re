import { useState, useEffect } from 'react'

import { database } from 'src/firebase'
import { Category, ApiCategory } from 'src/interfaces'

export const useCategories = () => {
  const [categories, setCategories] = useState<ApiCategory[]>([])

  useEffect(() => {
    const categoriesConnection = database.collection('categories').onSnapshot((snapshot) => {
      const fetchedCategories = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data()
      }))
      setCategories(fetchedCategories as ApiCategory[])
    })
    return () => {
      categoriesConnection()
    }
  }, [])

  const submitCategory = async (category: Category): Promise<void> => {
    database.collection('categories').add(category)
  }

  const deleteCategory = async (categoryId: string): Promise<void> => {
    if (window.confirm(`Are you sure you want to delete the category: ${categoryId}?`)) {
      try {
        await database.collection('categories').doc(categoryId).delete()
      } catch (error) {
        alert(error)
      }
    }
  }

  return { categories, submitCategory, deleteCategory }
}
