import axios from "axios";
import React from "react";

export default function Maps({address}) {
  const [post, setPost] = React.useState(null);
  const googleApi = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBQKqSOljzwCo4dUNykrI_d2kQdd0PDjm8&address='+address;

  React.useEffect(() => {
      axios.get(googleApi).then((response) => {
          setPost(response.data);
      });
  }, []);

  if (!post || post.status == 'ZERO_RESULTS') return 'Endereço não encontrado';

  return (
    <div className='coordinates'>
      {/* <input type="text" id="lat" placeholder="Lat" defaultValue={post.results[0].geometry.location.lat} disabled /> */}
      {/* <input type="text" id="long" placeholder="Long" defaultValue={post.results[0].geometry.location.lng} disabled /> */}
      <input type="text" id="status" defaultValue={post.status} />
      <p>{post.status}</p>
      <p>{post.results[0].formatted_address}</p>
    </div>
  );
}