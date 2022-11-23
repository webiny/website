import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

import VueLogo from "../../../assets/vuejs.svg"
import NextLogo from "../../../assets/nextjs.svg"
import ReactLogo from "../../../assets/react.svg"
import RemixLogo from "../../../assets/remix.svg"
import FlutterLogo from "../../../assets/flutter.svg"
import AstroLogo from "../../../assets/astro.svg"
import NuxtLogo from "../../../assets/nuxtjs.svg"
import SvelteLogo from "../../../assets/svelte.svg"
import GatsbyLogo from "../../../assets/gatsby-logo.svg"
import AngularLogo from "../../../assets/angular-logo.svg"
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
  },
  "flutter": {
    title: "Flutter",
    image: FlutterLogo
  },
  "astro": {
    title: "Astro",
    image: AstroLogo
  },
  "nuxtjs": {
    title: "Nuxt.js",
    image: NuxtLogo
  },
  "svelte": {
    title: "Svelte",
    image: SvelteLogo
  },
  "gatsby": {
    title: "Gatsby",
    image: GatsbyLogo
  },
  "angular": {
    title: "Angular",
    image: AngularLogo
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
    padding: 30px 20px 37px 30px;
    border-radius: 20px;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
    border: 10px solid #FFFFFF;
    background: #fff7f4;

    ${ButtonPrimary} {
      margin-top: unset;
    }
    > div {
      line-height: 1.2;
    }
    > img {
      height: 24px;
      align-self: flex-start;
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
      <img src={technologies[tech[0]].image} alt=""/>
      <div>
        <h4>{project}</h4>
        <p>{description}</p>
      </div>
      <TileLink to={slug}>Learn More &rarr;</TileLink>
    </TileOuter>
  )
}

export default BlogTile