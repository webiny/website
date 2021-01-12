import React from "react";
import styled from "react-emotion";
import theme from "../../../utils/theme";


const SelectedItem = styled("div")(
  {
    "& h4": {
      fontSize: 42,
      lineHeight: "50px",
      color: theme.color.black,
      margin: "10px 0"
    },

    "& p": {
      fontSize: 18,
      lineHeight: "32px",
      color: theme.color.black    
    },

    "& h5": {
      fontWeight: "bold",
      fontSize: 26,
      lineHeight: "32px",
      marginBottom: 15
    },

    "& ul": {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      listStyle: "none",
      padding: 0,

      "& li": {
        marginBottom: 10,
        position: "relative",
        paddingLeft: 25,
        color: theme.color.black,
        fontSize: 18,

        "& span": {
          position: "absolute",
          top: 6,
          left: 0,
          height: 15,
          width: 15,
          backgroundColor: "#90C418",
          borderRadius: "50%",          

          "&:after": {
            content: '" "',
            position: "absolute",
            top: 4,
            left: 4,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "white",
          }
        }
      }
    }
  }
)

const SelectedNav = (props) => {
  const selectedNav = props.content
  return (
    <SelectedItem>
      <img src={selectedNav.mainLogo} alt=""/>
      <h4 className="main-title">{selectedNav.title}</h4>
      {
        selectedNav.description && <p className="description">{selectedNav.description}</p>
      }
      <div>
        {
          selectedNav.subtitle && <h5>{selectedNav.subtitle}</h5>
        }
        {
          selectedNav.relatedList && 
            <ul>
              {
                selectedNav.relatedList.map((item, index) => (
                  <li key={index}><span></span> {item}</li>
                ))
              }              
            </ul>
        }        
      </div>
    </SelectedItem>
  )
}

export default SelectedNav