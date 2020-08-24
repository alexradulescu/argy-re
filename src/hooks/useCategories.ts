import { useState, useEffect } from 'react'

import { database } from 'src/firebase'
import { Category } from 'src/interfaces'

export const useCategories = () => {
  const [categories, setCategories] = useState<any>([])

  useEffect(() => {
    const categoriesConnection = database.collection('categories').onSnapshot((snapshot) => {
      const fetchedCategories = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data()
      }))
      setCategories(fetchedCategories)
    })
    return () => {
      categoriesConnection()
    }
  }, [])

  const submitCategory = async (category: Category): Promise<void> => {
    database.collection('categories').add(category)
  }

  const deleteCategory = async (categoryId: string): Promise<void> => {
    try {
      await database.collection('categories').doc(categoryId).delete()
    } catch (error) {
      alert(error)
    }
  }

  return { categories, submitCategory, deleteCategory }
}
