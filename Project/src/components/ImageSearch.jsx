import React, { useState } from 'react'

function ImageSearch({searchText}) {
    const [text, setText] = useState('')
     
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }
  return (
    <div className='max-w-sm rounded overflow-hidden mx-auto my-10'>
        <form className='max-w-sm w-full' onSubmit={onSubmit}>
            <div className='flex items-center border-b-2 border-teal-500 py-2'>
                <input onChange={e => setText(e.target.value)} className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type='text' placeholder='Search Image Term...'>

                </input>

                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                    Search
                </button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch