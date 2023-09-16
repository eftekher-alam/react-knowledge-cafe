import './App.css'
import Posts from './components/posts/Posts';
import Header from './components/header/header';
import BookMark from './components/bookMark/BookMark'
import { useState } from 'react';

function App() {

  const [bookMark, setBookMark] = useState([]);

  const handlerBookMark = (title) => {
    if (!bookMark.includes(title)) {
      const newBookMark = [...bookMark, title];
      setBookMark(newBookMark)
    }
  }

  return (
    <>
      <div className='container mx-auto'>
        <div className='mx-24'>
          <Header></Header>
          <main>
            <div className='grid grid-cols-3 my-8'>
              <Posts handlerBookMark={handlerBookMark}></Posts>
              <BookMark bookMark={bookMark}></BookMark>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
