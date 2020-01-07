import React, {useContext} from 'react'
import Context from '@s-ui/react-context'
// import i18n from '@s-ui/i18n/lib'

const Home = () => {
  const {i18n, domain} = useContext(Context)
  const {event} = domain || {}

  return <h1>{i18n.t(event.title)}</h1>
}

export default Home
