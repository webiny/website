import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";

import npmIcon from "./assets/npm-brands.svg";

const ResultSetMessage = styled("div")({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "100px 50px",
    ".msg": {
        maxWidth: 350,
        padding: 25,
        borderLeft: "5px solid " + theme.color.primaryDark,
        color: theme.color.black,
        "span.title": {
            fontWeight: theme.fontWeight.semiBold,
        },
        "&.warning": {
            backgroundColor: "#fffceb",
        },
        "&.error": {
            backgroundColor: "#ffd6c3",
        },
        "&.loading": {
            backgroundColor: "#c3e6ff",
        },
    },
});

const PluginListWrapper = styled("div")(
    {
        margin: "50px auto",
        display: "flex",
        alignItems: "top",
        flexWrap: "wrap",
    },
    mq({
        width: ["100%", 1200],
        justifyContent: ["center", "space-between"],
    }),
);

const PluginBox = styled("div")({
    transition: "all .2s ease",
    outline: 0,
    //height: "160px!important",
    padding: "20px 30px 55px 30px",
    position: "relative",
    borderRadius: "3px",
    overflow: "hidden",
    display: "block",
    boxSizing: "border-box",
    cursor: "pointer",
    background: "#fff",
    boxShadow: "0 10px 20px rgba(91,107,174,.15)",
    borderTop: "1px solid " + theme.color.darkGray,
    borderLeft: "1px solid " + theme.color.darkGray,
    borderRight: "1px solid " + theme.color.darkGray,
    borderBottom: "2px solid " + theme.color.darkGray,
    flex: "0 0 350px",
    marginBottom: 50,
    "&:hover": {
        borderBottom: "2px solid #FA5723",
    },
    ".content": {
        outline: 0,
        h3: {
            fontSize: 22,
            fontWeight: theme.fontWeight.semiBold,
            marginBottom: 10,
            marginTop: 0,
        },
        p: {
            fontSize: 16,
            marginBottom: 10,
        },
        a: {
            display: "block-inline",
            color: theme.color.primaryDark,
        },
    },
    ".footer": {
        display: "flex",
        justifyContent: "space-between",
        position: "absolute",
        bottom: "5px",
        width: "100%",
        left: 0,
        padding: "0 30px",
        boxSizing: "border-box",
        ".npm": {
            img: {
                height: 32,
            },
        },
        ".appTag": {
            fontSize: 12,
            textTransform: "uppercase",
            color: theme.color.black,
            backgroundColor: "#FFFCED",
            border: "1px solid " + theme.color.darkGray,
            borderRadius: 5,
            padding: "2px 5px",
            marginTop: 2,
            marginLeft: 10,
            alignItems: "center",
            height: 22,
            lineHeight: "100%",
            display: "flex",
        },
    },
});

class PluginList extends React.Component {
    state = { listResult: "" };

    renderResults(resultList) {
        // validate the results
        if (typeof resultList !== "object") {
            //return this.invalidResultSet ();
            return this.loadingResults();
        }

        // check if we have at least 1 result to display
        if (this.props.total < 1) {
            return this.noResultsFound();
        }

        // render the list of results
        return (
            <PluginListWrapper>
                {resultList.map(plugin => {
                    return this.pluginBox(plugin);
                })}
            </PluginListWrapper>
        );
    }

    noResultsFound() {
        return (
            <ResultSetMessage>
                <div className="msg warning">
                    <span className={"title"}>No results found</span>
                    <p>There are no plugins matching your query at this moment.</p>
                </div>
            </ResultSetMessage>
        );
    }

    invalidResultSet() {
        return (
            <ResultSetMessage>
                <div className="msg error">
                    <span className={"title"}>Query error</span>
                    <p>
                        For some reason we were not able to retrieve the plugin list at this point
                        in time. Please try again later.
                    </p>
                </div>
            </ResultSetMessage>
        );
    }

    loadingResults() {
        return (
            <ResultSetMessage>
                <div className="msg loading">
                    <span className={"title"}>Retrieving plugins ...</span>
                    <p>Please wait until we retrieve the plugin list.</p>
                </div>
            </ResultSetMessage>
        );
    }

    pluginBox(plugin) {
        let pluginName = plugin.package.name.split("/")[1];
        let orgName = plugin.package.name.split("/")[0].replace("@", "");

        return (
            <PluginBox
                key={plugin.package.links.npm}
                onClick={e => {
                    e.stopPropagation();
                    this.openPluginRepo(plugin.package.links.npm);
                }}
            >
                <div className="content">
                    <h3>{pluginName}</h3>
                    <p>{plugin.package.description}</p>
                    <p>
                        Plugin by{" "}
                        <a
                            onClick={e => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.openPluginRepo("https://github.com/" + orgName);
                            }}
                            href={"https://github.com/" + orgName}
                        >
                            {orgName}
                        </a>
                    </p>
                </div>
                <div className="footer">
                    <div className="npm">
                        <a href={plugin.package.links.npm}>
                            <img src={npmIcon} alt="" />
                        </a>
                    </div>

                    {plugin.package.keywords.includes("webiny-plugin-page-builder") && (
                        <div className="appTag">Page Builder</div>
                    )}
                    {plugin.package.keywords.includes("webiny-plugin-form-builder") && (
                        <div className="appTag">Form Builder</div>
                    )}
                    {plugin.package.keywords.includes("webiny-plugin-file-manager") && (
                        <div className="appTag">File Manager</div>
                    )}
                    {plugin.package.keywords.includes("webiny-plugin-headless-cms") && (
                        <div className="appTag">Headless CMS</div>
                    )}
                    {plugin.package.keywords.includes("webiny-plugin-theme") && (
                        <div className="appTag">Theme</div>
                    )}
                </div>
            </PluginBox>
        );
    }

    openPluginRepo(url) {
        window.open(url, "_blank");
    }

    render() {
        const resultList = this.renderResults(this.props.pluginList);

        return <React.Fragment>{resultList}</React.Fragment>;
    }
}

export default PluginList;
