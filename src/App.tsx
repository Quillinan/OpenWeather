import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [count, setCount] = useState(0)
  const [post, setPost] = useState<Post>({} as Post);

  const updatePost = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/1`,
      );
      if (response.status === 200 || Object.keys(response.data).length !== 0) {
          setPost(response.data);
        } else {
          setPost({} as Post);
        }
    } catch (error) {
      alert("Desculpe, ocorreu um erro inesperado");
      console.log(error);
    }
  };
  

  useEffect(() => {
    updatePost()
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Axios</h1>
      <p>Post title: {post.title}</p>
      <p>Post body: {post.body}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
