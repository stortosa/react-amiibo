import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Amiibos() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://www.amiiboapi.com/api/amiibo/');
    //?amiiboSeries=Super Smash Bros.
    console.log(data);

    const items = await data.json();
    // console.log(items);
    console.log(items.amiibo);

    //muestra los items del amiibo:
    // setItems(items.amiibo.slice(0, 10));

    //todos los 730 amiibos:
    setItems(items.amiibo)
  };

  const dataAmiibo = []

  items.forEach((e, i) => {
    dataAmiibo.push(e)
  });

  return (
    <div className="wrap">
      <h2>The Amiibos:</h2>
      <div className="grid">
        {dataAmiibo.map((item, idx) => (
          <ul key={idx}>
            <div className="card">
              <div className="card-image"><img className="amii" src={item.image} /></div>
              <div className="card-text"><h3>Name:</h3>{item.name}</div>
              <div className="card-states"><p>Game Series:</p>{item.gameSeries}
                <p>Type:</p>{item.type}</div>
            </div>

          </ul>
        ))}
      </div>
    </div>
  )

}

export default Amiibos;