import React from "react";

import {
    H2,
    P,
    ContainerForImage,
    ProductOverviewVideo,
    ProductsOverviewContainer,
} from "./product-overview.styled";

const ProductOverview = () => {

    return (
        <ProductsOverviewContainer>
            <H2>
                Everything an enterprise needs to <br />
                <span>build, manage and deliver</span> content at scale
            </H2>
            <P id="product-video">
                Webiny doesn't just manage your content. It allows you to also build and deploy
                sites and forms, manage all your projects centrally and use advanced processes that
                support organization-wide collaboration.
            </P>
            <ContainerForImage>
                <ProductOverviewVideo>
                    <iframe src="https://www.youtube-nocookie.com/embed/-KWwVtRUhOQ?controls=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ProductOverviewVideo>
            </ContainerForImage>
        </ProductsOverviewContainer>
    );
};

export default ProductOverview;
