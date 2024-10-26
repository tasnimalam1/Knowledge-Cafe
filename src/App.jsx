import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)

  const handleAddBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (id,time) =>{
    // setReadingTime(readingTime+ time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    // remove read blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex container mx-auto'>
      <Blogs 
      handleAddBookmark={handleAddBookmark}
      handleReadingTime={handleReadingTime}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
