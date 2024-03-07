import { useState } from "react";


export default function SearchBar(props) {
const [ id, setId ] = useState("")

const handleChange = (event) =>{
//debo capturar la data del input
const id = event.target.value;
//debo guardar esa data en mi ESTADO local id
setId(charId);
}

   return (
      <div>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
