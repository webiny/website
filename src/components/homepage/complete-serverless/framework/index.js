import React, { useState } from "react";
import styled from "react-emotion";
import mq from "../../../utils/breakpoints";
import theme from "../../../utils/theme";
import SelectedNav from "./selected-nav";

import Logo from "../assets/framework/logo.svg";
import vectorIcon from "../assets/framework/highlight.svg";
import buildAppImg from "../assets/framework/build-app.svg";
import foundationAppImg from "../assets/framework/foundation-app.svg";
import databaseImg from "../assets/framework/multiple-database.svg";
import secureImg from "../assets/framework/secure.svg";
import developerImg from "../assets/framework/love-developer.svg";

const FrameworksSection = styled("div")(
  {
      width: "100%",
      display: "flex",
      marginBottom: 30
  },
  mq({
      flexDirection: ["column", "row"],
      padding: ["50px 0", "100px 0"]
  }),
);

const Navigation = styled("div")(
  {
    "& .navigation-header": {
      display: "flex",
      alignItems: "center",
      padding: "0 0 33px",
      borderBottom: "1px solid #E6E6E6",

      "& img": {
        marginRight: 30
      },

      "& h5": {
        fontSize: 42,
        color: theme.color.black,
        lineHeight: "44px"
      },

      "& span":  {
        backgroundImage: "url(" + vectorIcon + ")",
        backgroundPositionX: "right",
        backgroundPositionY: "bottom",
        backgroundRepeat: "no-repeat",
      }
    },

    "& .navigation-content": {
      padding: "20px 0",

      "& .description": {
        fontSize: 24,
        lineHeight: "32px"
      },

      "& .navigation-item": {
        "& .navigation-item-content": {
          display: "flex",
          alignItems: "center",
          cursor: "pointer",

          "&.active": {
            "& .nav-circle": {
              background: theme.color.purple,

              "& span": {
                color: theme.color.white
              }
            },

            "& p": {
              color: theme.color.purple,
              fontWeight: "bold",
            }
          },

          ".nav-circle": {
            background: theme.color.white,
            boxShadow: "0px 0px 4px rgba(100, 100, 100, 0.298039)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 41,
            height: 41,
            borderRadius: 30,
            marginRight: 19,

            "& span": {
              fontWeight: "bold",
              fontSize: 20,
              lineHeight: "25px",
              color: theme.color.black
            }
          },
          
          "& p": {
            fontSize: 22,
            lineHeight: "28px",
            color: theme.color.black,
            margin: 0
          }
        }
      },

      "& .seperater": {
        height: 30,
        borderLeft: "1px dashed #808080",
        margin: "3px 0 3px 20px"
      },
    }    
  },
  mq({
    width: ["100%", "48%"],
    maxWidth: ["100%", "48%"],
    margin: [0, "0 2% 0 0"]
  }),
)

const SlideSection = styled("div")(
  mq({
    width: ["100%", "48%"],
    maxWidth: ["100%", "48%"],
    margin: [0, "0 0 0 2%"]
  }),
)

const navigationList = [
  {id: 1, text: "An easier way to build serverless apps", selected: true},
  {id: 2, text: "The serverless foundation for your app", selected: false},
  {id: 3, text: "Support for multiple databases", selected: false},
  {id: 4, text: "Secure by design", selected: false},
  {id: 5, text: "Made for developers", selected: false},
]

const navigationContent = [
  {
    id: 1,
    mainLogo: buildAppImg,
    title: "An easier way to build serverless apps",
    description: "There are many solutions that help you run, deploy and monitor serverless functions, but when it comes to actually coding one, there are none. Webiny is a solution that helps you code your serverless app by providing you with all the components like ACL, routing, file storage and many more.",
    subtitle: "Build with Webiny:",
    relatedList: ["Websites", "APIs", "Applications", "Microservices"]
  },
  {
    id: 2,
    mainLogo: foundationAppImg,
    title: "The serverless foundation for your app",
    description: "Start with a base project structure that's ready to deploy. There is a CLI to handle all the deployments and it's CI/CD ready. There is a GraphQL API layer that you can expand and add your logic to. Leverage existing ACL layer to implement security.  Use the Admin Panel and React components to build your SPA.",
    relatedList: ["IaaC support", "Admin panel SPA", "CI/CD ready", "Powerful ACL", "GraphQL API", "Webpack bundling"]
  },
  {
    id: 3,
    mainLogo: databaseImg,
    title: "Support for multiple databases",
    description: "We understand that most projects have a strong preference on the type of the database. For this reason Webiny comes with multi-database support out of the box. In case your preferred database is not on the list - it's easy to build an adapter for one."
  },
  {
    id: 4,
    mainLogo: secureImg,
    title: "Secure by design",
    description: "Webiny being serverless reduces potential attack vectors for attackers. Webiny also can be deployed inside a VPC with a whitelisted access control, giving you even greater security over your data and how users can access your application",
    relatedList: ["Built-in integration with AWS Cognito", "Generate access tokens for registered users to control access", "Ability to integrate 3rd party user providers like Okta and Auth0", "Deploy inside or outside a VPC"]
  },
  {
    id: 5,
    mainLogo: developerImg,
    title: "Made for developers",
    relatedList: ["Free and open-source (github)", "Comes with ready-made apps", "Self-hosted", "CI/CD integration", "Fully documented"]
  },
]

const Frameworks = () => {
  const [navigateItems, setNavigateItems] = useState(navigationList)
  const [selectedNav, setSelectedNav] = useState(navigationContent[0])
  const updateNavigate = (id) => {
    setSelectedNav(navigationContent.find(item => item.id === id))
    setNavigateItems(navigateItems.map(item => {
      if(item.id === id) {
        return {...item, selected: !item.selected}
      } else {
        return {...item, selected: false}
      }
    }))
  }

  return (
    <FrameworksSection>
      <Navigation>
        <div className="navigation-header">
          <img src={Logo} alt=""/>
          <h5>Webiny Serverless <span>Framework</span></h5>
        </div>
        <div className="navigation-content">
          <p className="description">Webiny is an open-source framework that helps developers and organisations to build solutions on top of serverless infrastructure.</p>
          {
            navigateItems && navigateItems.map(item => (
              <div className="navigation-item" key={item.id}>                
                <div className={`navigation-item-content ${item.selected ? "active" : ""}`} onClick={() => updateNavigate(item.id)}>
                  <div className="nav-circle">
                    <span>{item.id}</span>
                  </div>
                  <p>{item.text}</p>
                </div>
                {item.id < 5 ? <div className="seperater"/> : '' }
              </div>
            ))
          }
        </div>        
      </Navigation>
      <SlideSection>
        <SelectedNav content={selectedNav}/>
      </SlideSection>
    </FrameworksSection>
  )
}

export default Frameworks