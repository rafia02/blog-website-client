import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Components/Home/Home'
import AddBlog from './Components/Blog/AddBlog'
import toast, { Toaster } from 'react-hot-toast';
import AllBlogs from './Components/Blog/AllBlogs'
import DetailsBlog from './Components/Blog/DetailsBlog'


export const router = createBrowserRouter([
  {path: "/", element: <Layout></Layout>, children: [
    {path: "/", element: <Home></Home>},
    {path: "/blogs", element: <AllBlogs></AllBlogs>},
    {path: "/add-blog", element: <AddBlog></AddBlog>},
    {path: 'blog/:id', loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`), element: <DetailsBlog></DetailsBlog>},
    {path: "/favrite", element: <Home></Home>},
  ]}
])
const App = () => {

  return (
    <div className='max-w-screen-2xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
    </div>
  )
}

export default App