import React from 'react'
import styled from 'react-emotion'

import VueLogo from "../../../assets/vuejs.svg"
import NextLogo from "../../../assets/nextjs.svg"
import ReactLogo from "../../../assets/react.svg"
import RemixLogo from "../../../assets/remix.svg"
import { ButtonPrimary } from '../hero-section/hero.styled'

const technologies = {
  "vuejs": {
    title: "Vue.js",
    image: VueLogo
  },
  "react": {
    title: "React",
    image: ReactLogo
  },
  "remix": {
    title: "Vue.js",
    image: RemixLogo
  },
  "nextjs": {
    title: "Next.js",
    image: NextLogo
  }
}


const TileOuter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 30px 20px 37px 30px;
    border-radius: 20px;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
    border: 10px solid #FFFFFF;
    background: #fff7f4;
`

const BlogTile = ({
  slug,
  tech,
  project,
  description
}) => {
  console.log(slug)
  return (
    <TileOuter>
      <img src={technologies[tech[0]].image} width="100px" />
      <h4>{project}</h4>
      <p>{description}</p>
      <ButtonPrimary type="dark" href={slug}>View Tutorial</ButtonPrimary>
    </TileOuter>
  )
}

export default BlogTile