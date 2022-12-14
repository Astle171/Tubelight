import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Layout() {
  const navigate = useNavigate()

  const navigateToCounter = () => {
    navigate('/counter')
  }

  const navigateToForm = () => {
    navigate('/form')
  }

  return (
    <div>
      <button onClick={navigateToCounter}>Counter</button>
      <button onClick={navigateToForm}>Form</button>
    </div>
  )
}
