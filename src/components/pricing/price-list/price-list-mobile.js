import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import checkImg from "../assets/circle-check.svg";

const PriceGroupItem = styled("div")(
    {
        maxWidth: "90%",
        margin: "0 auto",

        "& h3": {
            textAlign: "center",            
        },

        "& .price-mobile-item": {
            display: "flex",
            marginBottom: 5,
            alignItems: "flex-start",

            "& div": {
                width: 21,
                display: "flex",
                justifyContent: "center"
            },

            "& p": {
                margin: "0 0 0 10px",
                textTransform: "uppercase",
                color: theme.color.blue100
            }
        }
    }
);

const PriceListMobile = ({priceList}) => {
    return (
        <>
            <PriceGroupItem>
                <h3>Open Source</h3>
                <p>Build full-stack serverless web applications free forever</p>
                {
                    priceList.map((item, index) => 
                        <div className="price-mobile-item" key={index}>
                            <div>
                                {item.open_source ? <img src={checkImg} alt=""/> : '-'}
                            </div>
                            <p>{item.label}</p>
                        </div>    
                    )
                }
            </PriceGroupItem>
            <PriceGroupItem>
                <h3>Enterprise</h3>
                <p>For businesses that want extra security and support</p>
                {
                    priceList.map((item, index) => 
                        <div className="price-mobile-item" key={index}>
                            <div>
                                {item.enterprise && <img src={checkImg} alt=""/>}
                            </div>
                            <p>{item.label}</p>
                        </div>    
                    )
                }
            </PriceGroupItem>
        </>
    )
}

export default PriceListMobile
