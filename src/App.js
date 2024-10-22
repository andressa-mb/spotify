import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import artistsData from './api-artists/artists.json';
import { useEffect, useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArtists, setFilteredArtists] = useState([]);

  useEffect(() => {
    if(searchTerm){
      const filtered = artistsData.filter(artist => 
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArtists(filtered);
    } else {
      setFilteredArtists([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Sidebar />
      <Main artists={filteredArtists} />
      <Footer />
    </div>
  );
}

export default App;
