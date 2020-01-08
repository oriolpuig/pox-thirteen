import React from 'react'
// import Context from '@s-ui/react-context'

import Header from '../components/shared/Header'
import Intro from '../components/sections/Intro'

const Home = () => {
  // const {i18n, domain} = useContext(Context)
  // const {event} = domain || {}

  return (
    <>
      <Header />
      <Intro />
    </>
  )
}

export default Home
