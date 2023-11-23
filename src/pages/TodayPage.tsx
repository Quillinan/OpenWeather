import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function TodayPage() {
  const [post, setPost] = useState<Post>({} as Post);

  const updatePost = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/1`);
      if (response.status === 200) {
        setPost(response.data);
      } else {
        setPost({} as Post);
      }
    } catch (error) {
      Swal.fire({
        title: "Conection error",
        text: "Error with API connection",
        icon: "error",
      });
      console.log(error);
    }
  };

  const setError = async () => {
    Swal.fire({
      title: "It lives!",
      text: "Just an error to show Swal working",
      icon: "success",
    });
  };

  useEffect(() => {
    updatePost();
  }, []);
  return (
    <div>
      <h1>Vite + ReactTS + Axios</h1>
      <p>Post title: {post.title}</p>
      <p>Post body: {post.body}</p>
      <button onClick={() => setError()}>Show error</button>
    </div>
  );
}
