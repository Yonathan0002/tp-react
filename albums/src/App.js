import React from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumList from './components/AlbumsList';

function App() {

  const albums = [
    {
        "id": 43,
        "nom": "...And Justice For All",
        "année": 1988,
        "artiste": {
            "id": 17,
            "nom": "Metallica"
        },
        "jaquette": "/albums/43/jaquette"
    },
    {
        "id": 373,
        "nom": "10,000 Days",
        "année": 2006,
        "artiste": {
            "id": 62,
            "nom": "Tool"
        },
        "jaquette": "/albums/373/jaquette"
    },
    {
        "id": 277,
        "nom": "100% Live",
        "année": 2002,
        "artiste": {
            "id": 7,
            "nom": "Prong"
        },
        "jaquette": "/albums/277/jaquette"
    }
]

  return (
    <div className="App">
      <header className="App-header">
        <AlbumList albums={albums} ak="ea"></AlbumList>
      </header>
    </div>
  );
}

export default App;
