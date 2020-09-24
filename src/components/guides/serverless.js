import React from "react";
import Page from "./components/page";
import Menu from "./components/menu";
import Box from "./components/box";
import Link from "gatsby-link";

class Serverless extends React.Component {
    items = [
        { href: "#intro", title: "Intro" },
        {
            href: "#what-is-serverless",
            title: "What is Serverless and what does it mean?",
        },
        {
            href: "#what-is-a-serverless-application",
            title: "What is a serverless application?",
        },
        {
            href: "#what-is-a-serverless-backend",
            title: "What is a serverless backend?",
        },
        {
            href: "#why-is-serverless-the-future-of-development",
            title: "Why serverless is the future of development?",
        },
        {
            href: "#what-is-a-serverless-website",
            title: "What is a serverless website?",
        },
        {
            href: "#what-is-serverless-development",
            title: "What is serverless development?",
        },
        {
            href: "#what-are-serverless-functions",
            title: "What are serverless functions?",
        },
        {
            href: "#what-is-a-serverless-architecture",
            title: "What is serverless architecture?",
        },
        {
            href: "#what-is-serverless-computing",
            title: "What is serverless computing?",
        },
        {
            href: "#what-is-serverless-framework",
            title: "What is Serverless Framework?",
        },
        {
            href: "#what-is-aurora-serverless",
            title: "What is Aurora Serverless?",
        },
        {
            href: "#what-is-a-serverless-cms",
            title: "What is a serverless CMS?",
        },
    ];

    componentDidMount() {
        if (window.location.hash) {
            setTimeout(() => {
                document.querySelector(window.location.hash).scrollIntoView();
            }, 0);
        }
    }

    render() {
        return (
            <Page title="Guide to Serverless">
                <Menu items={this.items} />

                <Box name={"intro"} title={"About this guide"}>
                    <p>
                        This guide was created to help you better understand "serverless " as an
                        approach to building and architecting applications.
                    </p>
                    <p>
                        This guide covers some of the main basic questions, but if you feel there
                        are still some questions that haven't been answered for you,{" "}
                        <Link to="/contact-us">let us know</Link> and we will try and update the
                        guide and make it better for everyone.
                    </p>
                </Box>

                <Box
                    name={"what-is-serverless"}
                    title={"What is serverless and what does it mean?"}
                >
                    <p>
                        Serverless means that there are no servers you have to manage to run a
                        particular service or an app. Usually, in Serverless architectures you rely
                        on services that are managed for you. Be that function-as-a-service,
                        storage-as-a-service, and others. Using managed services means that all the
                        maintenance and operational tasks are abstracted away. Yes, there are still
                        servers there, but they are no longer your responsibility to manage.
                    </p>
                </Box>

                <Box
                    name={"what-is-a-serverless-application"}
                    title={"What is a serverless application?"}
                >
                    <p>
                        A serverless application is one that is architected in a way where there are
                        no containers or servers that you need to install, configure and later on
                        manage or scale. Serverless applications run on services, instead of
                        servers. In practice, this means that there is a reduced focus on
                        infrastructure and an increased focus on business logic.
                    </p>
                </Box>

                <Box name={"what-is-a-serverless-backend"} title={"What is a serverless backend?"}>
                    <p>
                        Backend is part of the application that is processed on the server and not
                        on the client. In the case of a serverless backend, the server-side is
                        actually processed in the cloud using a service. A service is typically a
                        function, such as AWS Lambda. Therefore a serverless backend is a backend
                        powered by a service instead of a server.
                    </p>
                </Box>

                <Box
                    name={"why-is-serverless-the-future-of-development"}
                    title={"Why serverless is the future of development?"}
                >
                    <p>
                        Serverless removes complexities around managing infrastructure and frees up
                        developer resources. Developers no longer need to deal with configuring and
                        installing different tools that their application requires, as those are now
                        abstracted away as a managed service. In return, developers spend more time
                        building business logic and less time on installing, configuring and
                        maintaining infrastructure. This also means that products get faster to
                        market and cost less to develop. All these advantages are driving the
                        adoption of serverless and, over time, serverless will be the standard of
                        how all applications are built.
                    </p>
                </Box>

                <Box name={"what-is-a-serverless-website"} title={"What is a serverless website?"}>
                    <p>
                        A serverless website runs on services like function-as-a-service,
                        storage-as-a-service, and others. In its stack, it doesn’t have servers that
                        need to be installed, configured or managed. That is, there are still
                        servers, but they are managed by the service provider, such as AWS.
                    </p>
                </Box>

                <Box
                    name={"what-is-serverless-development"}
                    title={"What is serverless development?"}
                >
                    <p>
                        Serverless development refers to architecting and building applications
                        using managed services. The code that is written gets deployed to a service,
                        instead of a server, where it's then executed. Serverless development often
                        comes with certain challenges as not all services can be installed and run
                        locally on a laptop, so often an Internet connection is needed.
                    </p>
                </Box>

                <Box
                    name={"what-are-serverless-functions"}
                    title={"What are serverless functions?"}
                >
                    <p>
                        Serverless functions are functions deployed to a function-as-a-service, such
                        as AWS Lambda, Azure Functions or GCP Cloud Functions. Serverless functions
                        by their nature are stateless. Once the function executes it gets deleted,
                        together with its current state. Other features of serverless functions are
                        that they are usually billed per execution and have (almost) unlimited
                        scale.
                    </p>
                </Box>

                <Box
                    name={"what-is-a-serverless-architecture"}
                    title={"What is serverless architecture?"}
                >
                    <p>
                        Serverless architecture refers to the application architecture model where
                        the underlying application runs all of its operations, including its
                        business logic, on a set of services. Architecting applications in such a
                        way comes with many advantages such as zero servers to manage, less time
                        spent on infrastructure maintenance, better scalability factors and, in some
                        cases, a much better cost model, one driven by usage.
                    </p>
                </Box>

                <Box name={"what-is-serverless-computing"} title={"What is serverless computing?"}>
                    <p>
                        Serverless compute refers to function-as-a-service (FaaS). In practice, this
                        is a service to which you upload your code and the service executes the code
                        on a specific trigger and returns the response.{" "}
                    </p>
                    <p>
                        FaaS functions are stateless, they can be scaled (almost) indefinitely and
                        offer a pay-per-request cost model. An additional advantage is that you
                        don't need to manage a fleet of servers, load balancers or worry about
                        networking rules. Because of these benefits, FaaS is one of the top
                        serverless offerings.
                    </p>
                    <p>
                        Typical FaaS providers are services AWS Lambda, Azure Functions or GCP Cloud
                        Functions.
                    </p>
                </Box>

                <Box name={"what-is-serverless-framework"} title={"What is Serverless Framework?"}>
                    <p>
                        Serverless Framework is an open-source library that simplifies the
                        deployment of your serverless infrastructure. The framework is created by
                        Serverless Inc and it’s published under the MIT open-source licence.
                    </p>
                    <p>
                        Serverless Framework allows you to define your configuration using a YAML
                        file, and then the provided CLI creates the required resources. Under the
                        hood, Serverless Framework uses AWS Cloudformation.
                    </p>
                    <p>
                        There is a newer iteration of Serverless Framework called Serverless
                        Components. This library, instead of using Cloudformation, uses native cloud
                        SDK to create the infrastructure. As a result, the deployment times are
                        significantly shorter, in some cases it’s up to 25X faster than Serverless
                        Framework.
                    </p>
                </Box>

                <Box name={"what-is-aurora-serverless"} title={"What is Aurora Serverless?"}>
                    <p>
                        Aurora is an AWS product in relational database service category. It’s a
                        managed MySQL-compatible database. Aurora serverless is an iteration to the
                        standard Aurora service where the compute part of the service is managed
                        through an auto-scale feature. When the database instance is under a heavy
                        load, additional compute resources are introduced automatically to handle
                        the increased load. When there is no load, all the compute resources are
                        removed. This way of operating the database comes with many benefits such as
                        scalability, cost-effectiveness and operational simplicity.
                    </p>
                </Box>

                <Box name={"what-is-a-serverless-cms"} title={"What is a serverless CMS?"}>
                    <p>
                        Serverless CMS is a content management system architected to operate inside
                        a serverless environment. This means that to run such a system you don’t
                        need to install, configure or manage any servers. A serverless CMS such as
                        Webiny runs on AWS Lambda, S3 and API Gateway services. Such an architecture
                        allows the system to scale in and out much faster than traditional virtual
                        servers, and it has a lower management cost when compared to containers.
                    </p>
                </Box>
            </Page>
        );
    }
}

export default Serverless;
