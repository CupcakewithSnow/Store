import React from 'react'

import AppRoute from './component/AppRoute'
import NavBar from './component/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkAuth } from './http/userApi'
import {  Spinner } from 'react-bootstrap'
const App = () => {
  const dispatch = useDispatch()
  const [load, setLoad] = useState(true)
  useEffect(() => {
    dispatch(checkAuth()).finally(() => setLoad(false))
  },[])
  if (load) {
    return (
      <Spinner />
    )
  }
  return (
    <BrowserRouter>

      <NavBar />

      <AppRoute />

    </BrowserRouter>
  )
}

export default App

