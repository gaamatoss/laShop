import React, {useState} from 'react';
import FruitCard from '../Card';
import './style.css';

let frutas = [{
  url: "https://cdn.awsli.com.br/600x450/1304/1304561/produto/52600435/bc4903f017.jpg",
  name: "Laranja",
  price: 9.94
},{
  url: "https://www.peterpaiva.com.br/wp-content/uploads/2014/11/uvas-ROJAS.jpg",
  name: "Uva",
  price: 4.93
},{
  url: "https://cdn.awsli.com.br/600x1000/742/742655/produto/41486373/fd69b86818.jpg",
  name: "Morango",
  price: 3.92
},{
  url: "https://cdn.awsli.com.br/600x450/1304/1304561/produto/52600435/bc4903f017.jpg",
  name: "Laranja",
  price: 9.94
},{
  url: "https://www.peterpaiva.com.br/wp-content/uploads/2014/11/uvas-ROJAS.jpg",
  name: "Uva",
  price: 4.93
},{
  url: "https://cdn.awsli.com.br/600x1000/742/742655/produto/41486373/fd69b86818.jpg",
  name: "Morango",
  price: 3.92
}]


export default function FruitSearch() {

  const [search, setSearch] = useState('')
  const filterSearch = search.toLowerCase();

  const filterFruits = frutas.filter((fruta)=> fruta.name.toLowerCase().includes(filterSearch))

  return (
    <div className="bodyShop">
      <div className='searchBody'>
        <h3>Search fruit:</h3>
        <input type="text" className='inputSearch' placeholder='Busque sua fruta' onChange={(e)=> setSearch(e.target.value)} value={search} />
      </div>
      <div className='fruitList'>
        {filterFruits.map((fruta)=>(
          <FruitCard path={fruta.url} name={fruta.name} price={`$${fruta.price}`} />
        ))}
      </div>
    </div>
  );
};
