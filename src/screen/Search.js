import React from 'react';

const searchAddress = event => {
  console.log('Adress is:', event.target.value);
  // if (event.target.value.length > 5) {
  //   console.log('Busca!');
  // } else {
  //   console.log('Falta Endereço...');
  // }
}

const handleSearch = event => {
  if (event.target.value.length > 5) {
    console.log('Search is:', event.target.value);
    console.log('Search length is:', event.target.value.length);
  }
}

function Search() {
  return (
      <form className='searchForm'>
        <input type="text" id="search" name="search" placeholder="Endereço" maxLength={80} onChange={handleSearch} />
        <input className="buttonSearch toUppercase toBold bgWhite" type="button" value="Buscar" onClick={searchAddress} />
      </form>
  );
}

export default Search;