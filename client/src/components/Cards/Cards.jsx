import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css'

export default function Cards(props) {


   return (
   <div className={styles.wrapperCards} >
      {props.characters.map(character =>{
         return(
            <Card
            key ={character.id}
            id={character.id}
            status={character.status}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
         )
      }
   )}


   </div>
   )
}
