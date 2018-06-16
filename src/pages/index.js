import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/sections/hero/hero'
import Cms from '../components/sections/cms/cms'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Cms />
      </div>
    )
  }
}

export default IndexPage
