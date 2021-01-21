import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import { Link } from "gatsby";
import theme from "../../components/utils/theme";
import mq from "../../components/utils/breakpoints";
import ContentContainer from "../../components/ui/content-container";
import arrowIcon from "./assets/breadcrumb-arrow.svg";

const BreadCrumbPart = styled("section")(
    {
        boxShadow: "0px 0px 5px rgb(0 0 0 / 30%)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "10px 0",
    },
    mq({
        display: ["none", "block"]
    }),
);

const BreadCrumbList = styled("div")(
    {
        display: "flex",
        alignItems: "center",

        "& .breadcrumb-item": {
            "& a": {
                fontSize: 14,
                lineHeight: "18px",
                color: theme.color.white,

                "&.last": {
                    textDecoration: "none"
                }
            },
            "& img": {
                margin: "0 15px"
            }
        }
    },
    mq({

    })
);

const powerContainerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"]
    }),
);



const BreadCrumb = (props) => {
    const breadcrumbs = props.breadcrumbs;
    return (
        <BreadCrumbPart>
            <ContentContainer className={powerContainerClass}>
                <BreadCrumbList>
                    {
                        breadcrumbs.map((item, index) => (
                            <div className="breadcrumb-item" key={index}>
                                <Link href={item.link} className={breadcrumbs.length > index + 1 ? 'not-last' : 'last'}>{item.text}</Link> {breadcrumbs.length > index + 1 ? <img src={arrowIcon} alt=""/> : '' }
                            </div>
                        ))
                    }
                </BreadCrumbList>
            </ContentContainer>
        </BreadCrumbPart>
    );
}

export default BreadCrumb;
