import { useState, useEffect } from 'react'
import axios from 'axios'
import { Text, View } from 'react-native'

const VideojuegosList = () => {
  const [videojuegos, setVideojuegos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/videojuegos')
        setVideojuegos(response.data)
      } catch (error) {
        if (error.response) {
          console.error('Error fetching videojuegos: ', error.response.data)
        } else if (error.request) {
          console.error('No response received: ', error.request)
        } else {
          console.error('Error: ', error.message)
        }
      }
    }

    fetchData()
  }, [])

  return (
    <View>
      <Text>
        Videojuegos List
      </Text>
      <View>
        {videojuegos.map((videojuego) => (
          <View key={videojuego._id}>
            <Text>
              {videojuego.nombre}
            </Text>
            <Text>
              Género: {videojuego.genero}
            </Text>
            <Text>
              Desarrollador: {videojuego.desarrollador}
            </Text>
            <Text>
              Fecha de lanzamiento: {videojuego.fechaLanzamiento.toLocaleDateString()}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default VideojuegosList