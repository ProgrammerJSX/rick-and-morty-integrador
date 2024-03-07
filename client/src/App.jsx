import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
//import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';
import { useState } from 'react';



const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};




function App() {
const [characters, setCharacters]= useState([]);




function onSearch(){
 setCharacters([...characters, example]);
}


   return (
      <div className='App'>
        
        <Nav onSearch={onSearch} />
{     /*   <SearchBar onSearch={(characterID) => window.alert(characterID)} />*/
}
         <Cards characters={characters} />
       
      </div>
   );
}

export default App;
