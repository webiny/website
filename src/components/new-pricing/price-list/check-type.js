import React from "react";
import circleCheck from "../../../assets/new-pricing/check.svg";

const CheckType = ({ item }) => {
    if (typeof item === "string") {
        return <p>{item}</p>;
    } else if (typeof item === "boolean") {
        return <img src={circleCheck} alt="" />;
    } else if (typeof item === "object") {
        return (
            <div className="subList">
                <p>{item.title}</p>
                <p>{item.text}</p>
            </div>
        );
    }
};

export default CheckType;
