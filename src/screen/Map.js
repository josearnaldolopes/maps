import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import axios from "axios";
import React from "react";

 function Markers() {
  let url = 'https://www.josearnaldo.net/clientes/maps/address.php';
  const [post, setPost] = React.useState(null);
  
  React.useEffect(() => {
    axios.get(url).then((response) => {
        setPost(response.data);
    });
  }, []);

  if (!post) return 'Nada encontrado';

  const allAddress = post.address.map( (user) => <Marker key = {user.id} position={[user.latitude, user.longitude]}><Popup>{user.nome}</Popup></Marker>)
  
  return (
    allAddress
  );
}

function Map() {
  return (
    <MapContainer center={[-23.550137, -46.633007]} zoom={14} maxZoom={18} minZoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-23.550137, -46.633007]}>
        <Popup>
          Centro do Mapa.<br/>São Paulo/SP<br/>Aproveite :)
        </Popup>
      </Marker>
      <Markers></Markers>
    </MapContainer>
  );
}

export default Map;