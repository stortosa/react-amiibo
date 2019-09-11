import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom'; 

function Amiibos () {

    useEffect(() => {
      fetchItems();
    },[]);

    const [items, setItems] = useState([]);
    
    const fetchItems = async () => {
      const data = await fetch('https://www.amiiboapi.com/api/amiibo/');
      //?amiiboSeries=Super Smash Bros.
      console.log(data);

      const items = await data.json();
      // console.log(items);
      console.log(items.amiibo);
      
      //muestra los items del amiibo:
      // setItems(items.amiibo.slice(0, 20));  

      //todos los 730 amiibos:
      setItems(items.amiibo)
    };
    
    const dataAmiibo = []

    items.forEach((e, i) => {
      dataAmiibo.push(e)
      // dataAmiibo.push(`Name: ${e.name} -- ${e.gameSeries} -- ${e.type}  -- ${e.image}`)    
    });

    return (
      <div className="wrap">
      <h2>The Amiibos:</h2>
        <div class="grid"> 
          {dataAmiibo.map((item, idx) => (
            <ul key={idx}>
            <div class="a"><h3>Name:</h3>{item.name}</div>
            <div class="b"><h3>Game Series:</h3>{item.gameSeries}</div>
            <div class="c"><h3>Type:</h3>{item.type}</div>
            <div class="d"><img className="amii" src={item.image} /></div>           
            </ul>
          ))}
        </div>

      </div>
    )
}

export default Amiibos;