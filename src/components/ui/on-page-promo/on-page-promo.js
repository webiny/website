import React from 'react'
import styled from "react-emotion";
import theme from "../../utils/theme";

const Container = styled("div")`
  background-color: ${theme.color.gray100};
  padding: 1rem;
  border-radius: ${theme.borderRadius.base};

  p {
    color: ${theme.color.dark};
    margin-bottom: 0;
    text-align: center;
  }
  a {
    color: ${theme.color.dark}!important;
  }
`

const onPagePromo = () => {
  return (
    <Container><p>🌟&nbsp;Are you enjoying Webiny? Please help others discover us, <a href="https://github.com/webiny/webiny-js">star our GitHub repo!</a>&nbsp;🌟</p></Container>
  )
}

export default onPagePromo