import React, {useContext} from 'react'
import Context from '@s-ui/react-context'

const Home = () => {
  const {domain} = useContext(Context)
  const {event} = domain || {}
  console.log(event)

  return <h1>{event.title}</h1>
}

export default Home
