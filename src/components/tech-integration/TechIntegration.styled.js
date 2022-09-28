import styled from "react-emotion";
import theme from "../utils/theme";
import Link from "gatsby-link";

import mq, { breakpoints } from "../utils/breakpoints";

import RoundCheck from "../../assets/round-check.svg";
import backgroundImg from "../../assets/why-webiny/hero-section.svg";
import bg from "../../assets/bg-raggedbottom-purple.svg";
import bg2 from "../../assets/bg-lightorange-ragged-top.svg"
import BookDemoBG from "../../assets/book-demo-bg.svg"


export const Article = styled.article`
  .hilightText {
    color: ${theme.color.primaryDark};
  }
  .heading-link-anchor {
    display: none;
  }
  p,
  li {
    font-size: 20px;
  }
  .body {
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    padding: 40px 0 120px;

    .hilightText {
      color: ${theme.color.lightGreen};
    }
    a {
      color: ${theme.color.lightGreen};
      font-weight: bold;
      text-decoration: underline;
      text-decoration-skip-ink: auto;
    }
    code {
      margin-bottom: 25px;
    }
    .step-icon {
      margin-top: 24px;
      max-width: 75px;
    }
    .lead {
      font-size: 24px;
    }
  }
  .benefits {
    ul {
      text-align: left;
      margin-left: 0;
      padding-left: 1em;
    }
    ul > li {
      padding-inline-start: 32px;
      background: url(${RoundCheck}) no-repeat left 20%;
      list-style: none;
      margin-bottom: 20px;
      vertical-align: middle;
    }
  }
  .step {
    text-align: center;
  }
  .action img {
    max-height: 80px;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints[0]}px) {
    .body {
      padding: 40px 0 300px;
    }
    .why {
      display: flex;
      flex-direction: row;
      gap: 8rem;
      margin-bottom: 40px;

      & > * {
        flex: 1 1 0;
      }

      &.why-webiny {
        flex-direction: row-reverse;
      }
    }
    .benefits {
      display: flex;
      flex-direction: row;
      gap: 4rem;

      & > * {
        flex: 1 1 0;
      }
    }
    .step {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      text-align: left;

      & > * {
        flex: 1 1 0;
      }
      & > *:not(:last-child) {
        align-self: flex-start;
      }
      & > *:last-child {
        align-self: center;
      }
    }
    .integrations-lead {
      text-align: center;
    }
  }
  @media (min-width: ${breakpoints[1]}px) {
    .step .action {
      min-width: 580px;
    }
  }
`;

export const IntegrationsGrid = styled.div`
  display: grid;
  gap: 2rem;
  margin: 3rem 0 5rem;

  @media (min-width: ${breakpoints[1]}px) {
    grid-template-columns: repeat(auto-fit, minmax(50%,400px))
  }
`

export const TileLink = styled(Link)`
    font-size: 16px;
    font-weight: 700;
    display: block;
    color: #FA5A28;
    textDecoration: none;
    padding: 5px 10px 5px 0;

    &:hover,
    &:active,
    &:focus-visible {
      text-decoration: underline;
    }

`
export const Tile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 20px 37px 30px;
    border-radius: 4px;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
    background: #ffffff;

    > img {
      max-width: 86px;
      margin: 0 auto;
    }
    > .content {
      a {
        text-align: center;
      }
      h3.tiletitle {
        font-weight: 500;
        font-size: 24px;
      }
      p {
        font-size: 18px;
      }
    }
    @media (min-width: ${breakpoints[0]}px) {
      text-align: left;
      flex-direction: row;
      gap: 30px;

      > .content {
        > h3 {
          margin-top: unset;
          margin-bottom: 1rem;
          text-align: left;
        }
        > a {
          text-align: left;
        }
      }
    }
    @media (min-width: ${breakpoints[1]}px) {

    }
`

export const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 25px;
  width: auto;
  text-align: left;

  deckgo-highlight-code: {
    border-radius: 28px;
    border: 16px solid rgba(255, 255, 255, 0.25);
    margin-bottom: "20px";
    --deckgo-highlight-code-carbon-toolbar-display: none;
    --deckgo-highlight-code-font-size: 1.4em;
  }
  p {
    text-align: center;
  }
  h2,
  h3,
  h4 {
    font-weight: bold;
    text-align: center;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 36px;
  }
  h4 {
    font-size: 28px;
  }
  img {
    width: 100%;
  }
  .lead {
    text-align: left;
  }
  div[class*="FeaturedBlogWrapper"] {
    margin-top: 4rem;
  }

  @media (min-width: ${breakpoints[0]}px) {
    margin: 25px 15px 25px 15px;
    width: 100%;

    p {
      text-align: left;
    }
    h4 {
      font-size: 28px;
      text-align: left;
    }
    img {
      width: auto;
    }
    --deckgo-highlight-code-font-size: 1em;
  }
  @media (min-width: ${breakpoints[1]}px) {
    margin: 25px auto 25px auto;

    h2 {
      font-size: 48px;
    }
    h3 {
      font-size: 42px;
      text-align: left;
    }
    h4 {
      font-size: 28px;
    }
    .lead {
      text-align: center;
    }
  }
`;


export const TutorialsGrid = styled.div`
  margin-block-start: 4rem;
  display: grid;
  gap: 2rem;

  @media (min-width: ${breakpoints[0]}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${breakpoints[1]}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const BookADemoContainer = styled.aside`
  background: url(${BookDemoBG}) no-repeat center center;
  background-size: cover;
  padding: 4rem;
  align-items: center;
  margin: 4rem 0;

  > a {
    max-width: 220px;
    margin: 1rem auto 0 auto;
  }

  > h2 {
    margin-top: unset;
  }

  @media(min-width: ${breakpoints[1]}px) {
    display: flex;
    flex-direction: row;
    margin: 8rem 0;

    > a {
      margin: 0 auto;
    }
  > h2 {
      margin-block-end: unset;
      max-width: 60rem;
      text-align: left;
    }
  }
`

export const HeroWhyContainer = styled.div(
  {
    textAlign: "center",
    margin: "0 auto",
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    backgroundPosition: "bottom",
  },
  mq({
    backgroundSize: ["none", "none", "cover"],
    marginBottom: ["50px", "50px", "50px"],

    h1: {
      fontSize: ["36px", "46px", "56px"],
      fontWeight: "bold",
    },
    p: {
      fontSize: ["20px", "24px"],
    },
  }),
);

export const HeaderContainer = styled("div")(
  {
    textAlign: "center",
  },
  mq({
    margin: ["100px auto", "140px auto"],
    width: ["auto", "100%"],
    maxWidth: [960, 960, 738],
    h2: {
      textAlign: ["center"],
      fontSize: ["36px", "36px", "48px"],
    },
    img: {
      width: ["100%", "auto"],
      boxSizing: ["border-box", "border-box"],
      maxWidth: ["100vw", "100%"],
    },
  }),
);

export const CodeFieldBorder = styled.div`
      border-radius: 19px;
      background-color: #150B27;
      border: 10px solid rgba(255, 255, 255, 0.28);
      padding: 14px 10px 16px 11px;
`

export const CodeField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #150B27 ;
  color: #fff;
  borderRadius: 10px;

  div[class*="ToolTipText"] {
    margin-right: 10px;
  }
`

export const OtherIntegrationsTitle = styled.h2`
  margin-top: unset;
`

export const Hr = styled.hr`
  margin-top: 4rem;
  border: 1px solid #ccc;;
`


export const OtherIntegrationsContainer = styled.section`
  background: url(${bg2}) no-repeat center top;
  background-size: cover;
  padding: 4rem 0;

  @media (min-width: ${breakpoints[0]}px) {
    padding: 8rem 0;
  }
`