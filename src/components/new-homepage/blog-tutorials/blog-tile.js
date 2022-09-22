import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

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

const TileLink = styled(Link)`
    display: flex;
    gap: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #FA5A28;
    textDecoration: none;
    padding: 5px 10px 5px 0;

    &:hover,
    &:active,
    &:focus-visible {
      text-decoration: underline;
    }

`
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
      <TileLink to={slug}>Learn More &rarr;</TileLink>
    </TileOuter>
  )
}

export default BlogTile