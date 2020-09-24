import React from "react";
import ReactDOM from "react-dom";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import { DelayInput } from "react-delay-input";
import PluginList from "./list";
import Footer from "./footer";
import Button from "../ui/button";

import heroBg from "./assets/plugins-hero-bg.svg";

const Hero = styled("section")(
    {
        width: "100%",
        background: "url(" + heroBg + ") no-repeat center top",
        color: "#fff",
        boxSizing: "border-box",
        textAlign: "center",
    },
    mq({
        padding: ["100px 20px 25px", "150px 0 25px"],
        marginBottom: [50, 100],
        backgroundSize: ["cover"],
        backgroundPosition: ["top", "bottom", "bottom"],
    }),
);

const Title = styled("h1")({
    fontSize: theme.fontSize.h1,
    fontWeight: theme.fontWeight.semiBold,
    marginBottom: 15,
});

const SubText = styled("p")(
    {
        fontSize: theme.fontSize.subText,
        fontWeight: theme.fontWeight.regular,
        color: theme.color.white,
        textAlign: "center",
        lineHeight: "150%",
        marginBottom: 15,
    },
    mq({
        margin: ["20px 20px", "0 20% 40px 20%"],
    }),
);

const InputWrapper = styled("form")({
    position: "relative",
    width: "100%",
    maxWidth: 700,
    margin: "0 auto",
});

const inputStyle = css({
    background: theme.color.white,
    border: "1px solid #979797",
    borderRadius: 8,
    fontSize: 18,
    padding: "15px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
});

const ResultNumber = styled("p")({
    fontSize: theme.fontSize.paragraph,
    fontWeight: theme.fontWeight.semiBold,
    textAlign: "left",
    marginTop: 5,
});

const Pagination = styled("div")({
    width: "100%",
    maxWidth: 350,
    margin: "0 auto",
    textAlign: "center",
    marginBottom: 50,
});

class Plugins extends React.Component {
    keywords = "webiny-plugin";
    perPage = 6;

    constructor(props) {
        super(props);

        this.state = { query: "", results: [], totalResults: 0 };
        this.page = 0;
        this.inputRef = React.createRef();
    }

    handleChange = event => {
        let query = event.target.value;
        this.setState(
            {
                query,
                results: [],
                totalResults: 0,
            },
            () => {
                this.renderPlugins(0);
            },
        );
    };

    componentDidMount() {
        // first display the loading indicator
        this.renderPlugins(0);
    }

    async renderPlugins(from) {
        const results = await this.fetchResults(from);
        const previousResults = this.state.results;
        this.setState(
            {
                results: previousResults.concat(results.results),
                totalResults: results.total,
            },
            () => {
                this.renderResultList();
            },
        );
    }

    async fetchResults(from) {
        // query the registry
        const query =
            "https://api.npms.io/v2/search?q=" +
            (this.state.query !== "" ? this.state.query + "%20" : "") +
            "keywords%3A" +
            this.keywords +
            ",not:deprecated,not:unstable&size=" +
            this.perPage +
            "&from=" +
            from;
        const response = await fetch(query);
        const pluginList = await response.json();

        return pluginList;
    }

    renderResultList(results) {
        // append the results to DOM
        ReactDOM.render(
            <PluginList
                pluginList={this.state.results}
                query={this.state.query}
                total={this.state.totalResults}
            />,
            document.getElementById("plugin-list"),
        );
    }

    renderResultNumber() {
        if (typeof this.state.totalResults !== "number" || this.state.totalResults < 1) {
            return "Zero plugins found";
        }

        if (this.state.totalResults > 1) {
            return this.state.totalResults + " plugins found";
        } else if (this.state.totalResults === 1) {
            return "Only one plugin found";
        }
    }

    renderPagination() {
        const numPages = this.state.totalResults / this.perPage;
        if (numPages > this.page + 1) {
            return (
                <Pagination>
                    <Button
                        type={"outlineDark"}
                        onClick={() => {
                            this.page++;
                            this.renderPlugins(this.page * this.perPage);
                        }}
                    >
                        Load More
                    </Button>
                </Pagination>
            );
        }
    }

    render() {
        const resultNumber = this.renderResultNumber();

        return (
            <React.Fragment>
                <Hero>
                    <ContentContainer>
                        <Title>Webiny Plugins</Title>
                        <SubText>Find the right plugins for your Webiny apps.</SubText>
                        <InputWrapper
                            onSubmit={e => {
                                e.preventDefault();
                            }}
                        >
                            <DelayInput
                                className={inputStyle}
                                minLength={2}
                                delayTimeout={250}
                                placeholder="Search plugins"
                                onChange={this.handleChange}
                                value={this.state.query}
                                name="query"
                                autoComplete="off"
                            />
                            <ResultNumber>{resultNumber}</ResultNumber>
                        </InputWrapper>
                    </ContentContainer>
                </Hero>
                <div id="plugin-list" />
                {this.renderPagination()}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Plugins;
