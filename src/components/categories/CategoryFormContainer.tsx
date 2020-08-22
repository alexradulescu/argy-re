import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import { Input, Heading, Select, Button, Stack } from '@chakra-ui/core'

import { useCategories } from 'src/hooks'

const DEFAULT_CATEGORY = { id: '', label: '', treshold: '' }

export const CategoryFormContainer: FC = () => {
  const [category, setCategory] = useState(DEFAULT_CATEGORY)

  const { submitCategory } = useCategories()

  const onChangeCategory = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = () => {
    setCategory(DEFAULT_CATEGORY)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitCategory({
      ...category,
      id: category.label.toLowerCase().replace(/\s/g, '_')
    })
    clearForm()
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={'8px'}>
        {' '}
        <Heading size="md">Add Category</Heading>
        <Input
          id="outlined-basic"
          placeholder="Title"
          name="label"
          type="text"
          value={category.label}
          onChange={onChangeCategory}
          isRequired
        />
        <Input
          id="outlined-basic"
          placeholder="Max Amount"
          name="treshold"
          type="number"
          value={category.treshold}
          onChange={onChangeCategory}
          isRequired
        />
        <Button type="submit">Add Category</Button>
      </Stack>
    </form>
  )
}

CategoryFormContainer.displayName = 'CategoryFormContainer'
