import React from "react";
// import GetMap from '../api/Get';
import {useState} from 'react';

const HandleSearchAddress = (address) => {
  // event.preventDefault();
  console.clear();
  console.log('Busca na API by click: '+address);
  console.log('Trocados?');
  // return <GetMap address={event} />
  // setAddress('');
}

const Address = ({ address, setAddress }) => {

  return (
    <div>
    <input
      type="text"
      id='addressType'
      placeholder="Endereço"
      defaultValue={address}
      onChange={(e) => setAddress()}
      onClick={(e) => setAddress(e.target.value)}
    />
    {/* <input type="text" id="endereco" name="endereco" placeholder="Endereço" onChange={handleAddress} /> */}
    <input className="buttonSearch toUppercase toBold bgWhite" type="button" defaultValue='Buscar' onClick={(e) => setAddress(document.getElementById('addressType').value)} />
    </div>
  );
};

export default Address;
