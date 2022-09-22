import React from 'react'
import styled from 'react-emotion'

import VueLogo from "../../../assets/vuejs.svg"
import NextLogo from "../../../assets/nextjs.svg"
import ReactLogo from "../../../assets/react.svg"
import RemixLogo from "../../../assets/remix.svg"
import { ButtonPrimary } from '../hero-section/hero.styled'
import GitHub from "../../../assets/github.svg"

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

    ${ButtonPrimary} {
      margin-top: unset;
    }
`

const BlogTile = ({
  slug,
  tech,
  project,
  description,
}) => {
  return (
    <TileOuter>
      <img src={technologies[tech[0]].image} width="100px" />
      <div>
        <h4>{project}</h4>
        <p>{description}</p>
      </div>
      <ButtonPrimary type="defaultOrangeText" link={slug}>Learn More &rarr;</ButtonPrimary>
    </TileOuter>
  )
}

export default BlogTile