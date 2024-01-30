import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    }
    const handleAuthorChange = (e) => {
      setAuthor(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Title:', title)
        console.log('Content:', content)


        const blogData = {
            title,
            content,
            author
        }
        


        fetch(`http://localhost:5000/blog`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(blogData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTitle('');
        setContent('');
        toast.success("Post Add Successfully")
            })
            .catch(e => console.error(e))





      };


  return (
    <div>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="athor" className="block text-gray-700 text-sm font-bold mb-2">
            Author Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={handleAuthorChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
            className="w-full p-2 border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Blog
        </button>
      </form>
    </div>
    </div>
  )
}

export default AddBlog