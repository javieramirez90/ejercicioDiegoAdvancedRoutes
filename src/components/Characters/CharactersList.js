import React from 'react'
import characters from '../../characters'
import { Link } from 'react-router-dom'
// import { wrap } from 'module';

const CharactersList = () => {
  console.log(characters)
  return(
    
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100hv'
      }}>
      {characters.map(character => {
        return(
          <section key={character.id} style={{
            marginRight:'5vw'
          }}>
          <Link to={`/characters/${character.id}`}>
            <img src={character.image} alt={`Foto del personaje ${character.name}`} />
          </Link>
            <h3>{character.name}</h3>

          </section>
        )
      })}
      CharacterList perroñe</div>
  )
}

export default CharactersList;