import React from 'react'
import { useParams } from 'react-router'

export const Career = () => {
  const {id} = useParams()
  return (
    <h1>Books {id}</h1>
  )
}
