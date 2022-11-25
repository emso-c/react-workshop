import React, { useEffect, useState } from 'react'

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3004/dogs')
        .then(res => res.json())
        .then(data => setDogs(data))
    }, [])
  return dogs.map(dog => (
            <img style={styles.image} alt={dog.title} src={dog.image}></img>
    ))
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    textsContainer: {
        fisplay: 'flex',
        flexDirection: 'column',
        margin: 10,
        gap: 10
    },
    image: {
        width: 100,
        height: 150
    }
}

export default Dogs