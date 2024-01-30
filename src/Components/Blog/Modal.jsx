import React from 'react'

const Modal = ({isModalOpen, handleUpdate, setModalOpen, updatedTitle, setUpdatedTitle, updatedContent, setUpdatedContent}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ${
        isModalOpen ? 'visible' : 'invisible'
      }`}
    >
      <div className="relative w-1/2  mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-2 border-gray-300 rounded-md shadow-md">
          <div className="flex items-start justify-between p-5 border-b border-gray-300 border-solid rounded-t">
            

            <div className="flex w-full mt-5 items-center justify-between">
            <h3 className="text-2xl font-semibold">Update Blog</h3>
            <button onClick={()=>setModalOpen(false)} className="text-sm font-bold border-2  rounded-full border-gray-700 text-center px-3 py-[2px] ">
                X
              </button>
            </div>
            
            

          </div>
          <div className="relative p-6 flex-auto">
            <label htmlFor="updatedTitle" className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="updatedTitle"
              value={updatedTitle}
              placeholder={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />

            <label htmlFor="updatedContent" className="block text-gray-700 text-sm font-bold mt-4 mb-2">
              Content
            </label>
            <textarea
              id="updatedContent"
              value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}
              className="w-full p-2 border rounded-md"
              rows="4"
              required
            ></textarea>

            <div className="flex items-center justify-end mt-6">
              <button
                onClick={handleUpdate}
                className="text-sm border-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold duration-300 ease-linear hover:scale-x-105 border-blue-700 rounded-2xl text-center px-4 py-1 "
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal