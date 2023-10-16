'use client'

import React from 'react'
import { useState, useEffect } from 'react'
const Page = () => {
  const [data, setData] = useState("")
  let fetchItems = async () => {
    const response = await fetch('/api/item')
    const data = await response.json()
    setItems(data)
  }
useEffect(() => {

    fetchItems()
},[])
  return (
    <div>dashboard</div>
  )
}

export default Page