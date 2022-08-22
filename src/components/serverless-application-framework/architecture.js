import React, { useState } from "react";
import styled from "react-emotion";
import mq from "../utils/breakpoints";

import arch1 from "./assets/arch-1.png";
import arch2 from "./assets/arch-2.png";
import arch3 from "./assets/arch-3.png";

const tabs = [
    { id: 1, text: "Overview", selected: true },
    { id: 2, text: "GraphQL API Request", selected: false },
    { id: 3, text: "Upload Image", selected: false },
];

const CodeTabPart = styled("div")({
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 50,
    height: "100%",
});

const TabHeader = styled("div")(
    {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        background: "#434468",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

        "& .tab-item": {
            padding: "24px 0",
            textAlign: "center",
            cursor: "pointer",

            "&:first-child": {
                borderTopLeftRadius: 10,
            },

            "&:last-child": {
                borderTopRightRadius: 10,
            },

            "&.active": {
                backgroundColor: "#7979F7",
            },

            "& span": {
                fontSize: 18,
                lineHeight: "23px",
                color: "#D9DAE1",
            },
        },
    },
    mq({
        "& .tab-item": {
            "& span": {
                lineHeight: ["15px", "23px"],
                fontSize: [13, 18],
                color: "#D9DAE1",
            },
        },
    }),
);

const TabContent = styled("div")({
    padding: "25px",
    backgroundColor: "#fff",
    border: "1px solid #2B2C55",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: "center",
    img: {
        height: 600,
        width: "auto",
    },
});

const ArchitectureTab = () => {
    const [tabList, setTabList] = useState(tabs);
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const updateTab = id => {
        setSelectedTab(tabs.find(item => item.id === id));
        setTabList(
            tabList.map(item => {
                if (item.id === id) {
                    return { ...item, selected: !item.selected };
                } else {
                    return { ...item, selected: false };
                }
            }),
        );
    };
    return (
        <CodeTabPart>
            <TabHeader>
                {tabList.map(item => (
                    <div
                        className={`tab-item ${item.selected ? "active" : ""}`}
                        key={item.id}
                        onClick={() => updateTab(item.id)}
                    >
                        <span>{item.text}</span>
                    </div>
                ))}
            </TabHeader>
            <TabContent>
                {selectedTab.id === 1 && <img src={arch1} alt="" />}
                {selectedTab.id === 2 && <img src={arch2} alt="" />}
                {selectedTab.id === 3 && <img src={arch3} alt="" />}
                {selectedTab.id === 4 && <p>Pending</p>}
            </TabContent>
        </CodeTabPart>
    );
};

export default ArchitectureTab;
