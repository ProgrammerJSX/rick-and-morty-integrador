import styles from "./Card.module.css";


export default function Card(props) {
   console.log(props)
   return (
      <div className={styles.cardContainer} >
         <div className={styles.header}>
            <div className={styles.wrapperButton} >
            <button onClick={props.onClose}>X</button>
            </div>
    
         <img src= {props.image} alt='' /> 
         </div>
   
         <div className={styles.wrapperText}>{/*
               <h2>{props.id} </h2>
                <h2>{props.origin} </h2>
                 <h2>{props.status} </h2>
   */ }
        <div className={styles.name}>      <h1  >{props.name} </h1>
        </div>
        <h2 className={status == 'Alive' ? styles.statusalive : styles.statusdead} >
         {props.status} </h2>
        <h2>{props.gender} </h2>
         <h2>{props.species} </h2>
        
         </div>
      </div>
   );
}
