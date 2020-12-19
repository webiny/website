import React, { useState, useEffect } from "react"
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Desktop from "./price-list-desktop";
import Mobile from "./price-list-mobile";
import pricelistBg from "../assets/price-list.svg";

function useWindowWidth() {
    const [width, setWidth] = useState();
  
    useEffect(() => {      
      function handleResize() {        
        setWidth(window.innerWidth);
      }      
      window.addEventListener("resize", handleResize);          
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return width;
}

const priceList = [
    {label: 'Single platform for all your serverless use-cases', open_source: true, enterprise: true},
    {label: 'Webiny api - a secure graphql api layer powered by apollo federation with a microservices architecture', open_source: true, enterprise: true},
    {label: 'Webiny cli - quickly create projects and deploy them to the cloud. Easily manage multiple environments for the same project.', open_source: true, enterprise: true},
    {label: 'Webiny admin ui - a set of reusable react components', open_source: true, enterprise: true},
    {label: 'Webiny apps - page builder, form builder, headless cms & file manager', open_source: true, enterprise: true},
    {label: 'Community support (slack, forum docs)', open_source: true, enterprise: true},
    {label: 'Priority-based sla support service', open_source: false, enterprise: true},
    {label: 'Consultation services', open_source: false, enterprise: true},
    {label: 'Developer training', open_source: false, enterprise: true},
    {label: 'Safe migration path for new updates', open_source: false, enterprise: true},
    {label: 'Assistance with the migration of existing projects', open_source: false, enterprise: true},
]

const PriceListSection = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundImage: "url(" + pricelistBg + ")",
        backgroundRepeat: "no-repeat",        
        backgroundSize: "cover",
        backgroundPosition: "top",
    },
    mq({
        padding: ["0 15px 110px", "110px 15px"]
    }),
);

const containerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"]
    }),
);

const PriceList = () => {
    
    const windowWidth = useWindowWidth();

    return (
        <PriceListSection>
            <ContentContainer className={containerClass}>
                {
                    windowWidth > 769 ? <Desktop priceList={priceList}/> : <Mobile priceList={priceList}/>
                }
            </ContentContainer>            
        </PriceListSection>
    )
}

export default PriceList
