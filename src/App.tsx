import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Swal from 'sweetalert2'

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
      if (response.status === 200) {
          setPost(response.data);
        } else {
          setPost({} as Post);
        }
    } catch (error) {
      Swal.fire({
        title: "Conection error",
        text: "Error with API connection",
        icon: "error"
      });
      console.log(error);
    }
  };

  const setError = async () => {
    Swal.fire({
      title: "It lives!",
      text: "Just an error to show Swal working",
      icon: "success"
    });
  }
  

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
      <button onClick={() => setError()}>
          Show error
        </button>
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
