import React from 'react';
import FruitCard from '../Card';
import { Button } from 'rsuite';
import './style.css';
const fruitSearch = () => {
  return (
    <div className="bodyShop">
      <div className='searchBody'>
        <h3>Search fruit:</h3>
        <input className='inputSearch' placeholder='Busque sua fruta' />
        <Button>Buscar</Button>
      </div>
      <div className='fruitList'>
        <FruitCard path="https://cdn.awsli.com.br/600x450/1304/1304561/produto/52600435/bc4903f017.jpg" name="Laranja" price="$9.99" />
        <FruitCard path="https://saberhortifruti.com.br/wp-content/uploads/2020/05/manga-tipo-rosa.jpg" name="Manga" price="$9.99" />
        <FruitCard path="https://www.peterpaiva.com.br/wp-content/uploads/2014/11/uvas-ROJAS.jpg" name="Uva" price="$9.99" />
        <FruitCard path="https://scfoods.fbitsstatic.net/img/p/pera-williams-unidade-70671/257173.jpg" name="Pera" price="$9.99" />
        <FruitCard path="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/280px-Red_Apple.jpg" name="Maça" price="$9.99" />
        <FruitCard path="https://cdn.awsli.com.br/600x1000/742/742655/produto/41486373/fd69b86818.jpg" name="Morango" price="$9.99" />
      </div>
    </div>
  );
};

export default fruitSearch;