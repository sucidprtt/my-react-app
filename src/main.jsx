import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import './style.css'

function Card (props){
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img}
      alt="fruit_img" 
      style={{width: '150px', height: '150px'}} />
      <p>Harga: {props.harga}</p>
      <p>Stok: {props.stok}</p>
    </div> 
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1>Toko Buah</h1>
      <Card 
      name="Apel"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykDdD0ozB-6zlhMHbWBlAqsLyX6cZw5jxMQ&s" 
      harga="15000"
      stok="15"
      />
      <Card 
      name="Jeruk"
      img="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/jawapos/2020/01/Jeruk-Mandarin-Pixabay.jpg"
      harga="20000"
      stok="20"
      />
      <Card 
      name="Manga"
      img="https://cdn.rri.co.id/berita/Baubau/o/1730381938823-Mangga_ASTRO/ujh9whw5ghdmjd0.jpeg" 
      harga="30000"
      stok="30"
      />
    </div>
  </React.StrictMode>,
)
