import './App.css'
import Card from './components/Card'

function App() {
  return (
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
  )
}

export default App
