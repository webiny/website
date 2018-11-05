import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby-link";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CookieNotice from "../components/ui/cookie-notice";

import "./reset.css";
import "./index.css";

class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={this.props.title}
          meta={[
            { name: "description", content: this.props.description },
            {
              name: "keywords",
              content: "cms, serverless, nodejs, open source, reactjs, graphql"
            },
            {
              name: "viewport",
              content:
                "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
            }
          ]}
        />
        <Helmet
          link={[
            {
              rel: "shortcut icon",
              href: withPrefix("./favicon.ico"),
              type: "image/x-icon"
            }
          ]}
        />
        <Header />
        {this.props.children}
        <Footer />
        <CookieNotice />
      </div>
    );
  }
}

export default BaseLayout;
