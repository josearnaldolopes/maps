//import axios from "axios";
import InputMask from 'react-input-mask';
import {useState} from 'react';
import React, { Fragment } from 'react';
import {useAlert} from 'react-alert';
import Maps from '../api/Maps';
import Address from './Address'

export default function App() {
  //const [get, setPost] = React.useState(null);
  //const [clinica, setClinica] = useState('');
  //const [cnpj, setCnpj] = useState('');
  //const [message, setMessage] = useState('');
  const [address, setAddress] = useState("");
  const alert = useAlert();

  const handleClinica = event => {
    //setClinica(event.target.value);
    //console.log(event.target.disabled)
    //console.log('Clinica is:', event.target.value);
    //console.log('Lenght:', event.target.value.length);
  }

  const handleCNPJ = event => {
    //setCnpj(event.target.value);
    //console.log('CNPJ is:', event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const clinicaName = document.getElementById('nome').value;
    const clinicaCnpj = document.getElementById('cnpj').value;
    const clinicaAddress = document.getElementById('addressType').value;
    //const AddressStatus = document.getElementById('status').value;

    // if (!clinicaName) {
    //   document.getElementById('nome').focus(); 
    //   alert.error("Preencha o nome da clinica");
    // } else if (!clinicaCnpj) {
    //   document.getElementById('cnpj').focus();
    //   alert.error("Preencha com o CNPJ");
    // } else if (!clinicaAddress) {
    //   document.getElementById('addressType').focus();
    //   alert.error("Preencha com o endereço");
    // } else {
    //   if (!AddressStatus) {
    //     alert.success("Endereço errado");
    //   } else {
    //     alert.success("Enviar endereço");
    //   }
    // }
    
  }

  return (
    <Fragment>
    <div>
      <form className='addForm' onSubmit={handleSubmit}>
        <p className="toUppercase toBold">Cadastro da Clínica:</p>
        <input type="text" id="nome" placeholder="Nome da Clínica" onChange={handleClinica}/>
        <InputMask mask="99.999.999/9999-99" id="cnpj" placeholder="CNPJ" onChange={handleCNPJ} />
        <Address address={address} setAddress={setAddress} />
        {address ? <Maps address={address} /> : null}
        <input className="buttonAdd toUppercase toBold bgWhite" type="button" value="Cadastrar" onClick={handleSubmit} />
      </form>
    </div>
    </Fragment>
  );
}