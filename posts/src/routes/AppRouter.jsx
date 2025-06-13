import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../pages/Feed'
import Posts from '../pages/Posts'
import Update from '../pages/Update'
import More from '../pages/More'

export default function AppRouter() {
  return (
    <Routes>
        <Route path={'/'} element={<Feed/>}></Route>
        <Route path={'/posts'} element={<Posts/>}></Route>
        <Route path={'/update/:id'} element={<Update/>}></Route>
        <Route path={'/more/:id'} element={<More/>}></Route>
        <Route path={'*'} element={<Error/>}></Route>
    </Routes>
  )
}
