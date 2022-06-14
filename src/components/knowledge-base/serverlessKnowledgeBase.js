import React, { Fragment } from "react";
import Breadcrumb from "../../layouts/components/breadcrumb";

// utils
import ContentContainer from "../ui/content-container";
import PostCard from "./components/postCard";

// styles
import {
    TextContentWrapper,
    TitleHighlight,
    Title,
    containerClass,
    FeaturedContentSection,
} from "../blog/blog-styles";


const ServerlessKnowledgeBase = props => {
    const { data } = props;

    const breadcrumbs = [{ link: "/", text: "Home" }, { text: "Serverless Knowledge Base" }];

    return (
        <Fragment>
            <Breadcrumb theme="dark" breadcrumbs={breadcrumbs} />
            <FeaturedContentSection {...props}>
                <ContentContainer className={containerClass}>
                    <TextContentWrapper>
                        <Title>
                            <TitleHighlight> Serverless </TitleHighlight> Knowledge Base
                        </Title>
                    </TextContentWrapper>
                    <div className="post-container">
                        {data.map(post => (
                            <PostCard data={post.frontmatter} key={post.id} />
                        ))}
                    </div>
                </ContentContainer>
            </FeaturedContentSection>
        </Fragment>
    );
};

export default ServerlessKnowledgeBase;
