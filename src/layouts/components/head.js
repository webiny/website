import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby-link";
import ogImageDefault from "../assets/webiny-social-share.jpg";

class Head extends React.Component {
    render() {
        const ogImage = this.props.image ? this.props.image : ogImageDefault;
        let domainName =
            typeof window !== "undefined"
                ? window.location.origin + "/"
                : "https://www.webiny.com/";

        return (
            <React.Fragment>
                <Helmet
                    title={this.props.title}
                    htmlAttributes={{ lang: "en" }}
                    meta={[
                        { name: "description", content: this.props.description },
                        {
                            name: "keywords",
                            content: "cms, serverless, nodejs, open source, reactjs, graphql",
                        },
                        {
                            name: "viewport",
                            content:
                                "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5",
                        },
                        {
                            property: "og:type",
                            content: "website",
                        },
                        {
                            property: "og:title",
                            content: this.props.title,
                        },
                        {
                            property: "og:description",
                            content: this.props.description,
                        },
                        {
                            property: "og:image",
                            content: domainName + ogImage,
                        },
                        {
                            name: "image",
                            property: "og:image",
                            content: domainName + ogImage,
                        },
                        {
                            name: "twitter:image",
                            content: domainName + ogImage,
                        },
                        {
                            name: "twitter:card",
                            content: "summary_large_image",
                        },
                        {
                            name: "twitter:site",
                            content: "@WebinyCMS",
                        },
                        {
                            name: "twitter:title",
                            content: this.props.title,
                        },
                        {
                            name: "twitter:description",
                            content: this.props.description,
                        },
                    ]}
                />
                <Helmet
                    link={[
                        {
                            rel: "shortcut icon",
                            href: withPrefix("./favicon.ico"),
                            type: "image/x-icon",
                        },
                    ]}
                />

                <Helmet>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicons/site.webmanifest" />
                    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#d76543" />
                    <link rel="shortcut icon" href="/favicons/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#603cba" />
                    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
                    <meta name="theme-color" content="#ffffff" />
                </Helmet>

                <Helmet>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-698369826" />
                    <script>
                        {`
                  window.dataLayer = window.dataLayer || []; 
                  function gtag(){
                      dataLayer.push(arguments);
                  } 
                  gtag('js', new Date()); 
                  gtag('config', 'AW-698369826'); 
              `}
                    </script>
                </Helmet>
            </React.Fragment>
        );
    }
}

export default Head;
