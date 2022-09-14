import React from "react";
import {MDXProvider} from '@mdx-js/react'
import Terms from './terms.mdx'
import BaseLayout from "../layouts/base";
import Tos from "../components/static/tos";

class TosPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Terms of Service"
                description="Welcome to Webiny's website. Please read on to learn the rules and restrictions that govern your use of our website"
            >
                <MDXProvider>
                    <Tos>
                        <Terms/>
                    </Tos>
                </MDXProvider>
            </BaseLayout>
        );
    }
}

export default TosPage;
