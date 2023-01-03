import axios from "axios";
import React from "react";

export default function GetMap({username}) {
  const [post, setPost] = React.useState(null);
  const baseURL = 'https://jsonplaceholder.typicode.com/posts/'+username;

  React.useEffect(() => {
      axios.get(baseURL).then((response) => {
          setPost(response.data);
      });
  }, []);

  if (!post) return 'Deu erro na busca';

  return (
    <div>
      {/* <small>Rand: {Math.random()}</small>
      <small>Small: {username}</small> */}
      {/* <small>URL: {baseURL}</small> */}
      <input type="text" id="latitude" placeholder="Lat" value={post.title} disabled />
      <h5>{post.title}</h5>
      <small>{post.body}</small>
    </div>
  );
}