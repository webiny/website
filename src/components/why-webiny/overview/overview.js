import React, {Fragment} from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';


import rectangleBg from './assets/rectangle-bg.svg'
import ellipseBg from './assets/ellipse.svg';
import videoPreviewBg from './assets/video-preview-bg.svg';
import dotsBg from './assets/dots.svg';

import YTVideoComponent from "../../ui/layout/yt-video";
import PageBuilderDemoImg from "../../serverless-app/page-builder/assets/page-builder-demo.png";


const Section = styled('section')(
    {
        position: 'relative',
        overflowX: 'hidden'
    },
    mq({
        padding: ['0px', '0px'],
        '@media (min-width: 1460px)': {
            backgroundPosition: 'bottom',
            paddingTop: 0
        }
    })
);

const SectionWithBg = styled('section')(
    {
        backgroundColor: theme.color.white,
        position: 'relative',
        zIndex: 0,
        backgroundImage: 'url(' + dotsBg + ')',
        backgroundRepeat: 'no-repeat'
    },
    mq({
        backgroundSize: ['cover', 'auto', '100%'],
        backgroundPosition: ['center', 'top', 'top', 'center'],
        padding: ['0px 0px 0x', '0px 0px 110px'],
        '@media (min-width: 1460px)': {
            backgroundPosition: 'bottom',
            paddingTop: 0
        }
    })
);

const overviewContainerClass = css(
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 1200,
        position: 'relative'
    },
    mq({
        width: ['100%', '100%'],
        padding: ['75px 0px 0px', '85px 0px 0px']
    })
);

const OverviewSectionWrapper = styled('div')(
    {
        display: 'flex',
        flexDirection: 'column'
    },
    mq({
        width: ['100%', 1100],
        alignItems: ['center']
    })
);

const Title = styled('h1')(
    {
        position: 'relative',
        maxWidth: 900,
        fontSize: theme.fontSize['5xl'],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.dark,
        textAlign: 'center',
        lineHeight: '48px',
        marginBottom: 24,
        '&::after': {
            content: 'url(' + ellipseBg + ')',
            position: 'absolute',
            top: -50,
            right: 0
        }
    },
    mq({
        marginLeft: [0, 'auto'],
        marginRight: [0, 'auto']
    })
);

const TitleHighlight = styled('span')({
    backgroundImage: 'url(' + rectangleBg + ')',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',
    backgroundRepeat: 'no-repeat'
});

const SubTitle = styled('h3')(
    {
        fontSize: theme.fontSize.lg,
        fontWeight: theme.fontWeight.regular,
        lineHeight: '34px',
        marginTop: 0,
        marginBottom: 30,
        color: theme.color.dark,
        textAlign: 'center'
    },
    mq({
        maxWidth: [337, 670],
        marginLeft: [0, 'auto'],
        marginRight: [0, 'auto']
    })
);

const Caption = styled('h3')(
    {
        fontSize: theme.fontSize.lg,
        fontWeight: theme.fontWeight.bold,
        lineHeight: '34px',
        marginTop: 0,
        marginBottom: 30,
        color: theme.color.dark,
        textAlign: 'center'
    },
    mq({
        maxWidth: [337, 670],
        marginLeft: [0, 'auto'],
        marginRight: [0, 'auto']
    })
);

const ImageWrapper = styled('div')(
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        position: 'relative'
    }
);

const videoPreviewClass = css({
        position: 'absolute',
        '& img': {
            width: '95%',
            transform: 'translate(2%, -10%)'
        }
    }
);

class WebinyOverview extends React.Component {
    render() {
        return (
            <Fragment>
                <Section {...this.props}>
                    <ContentContainer className={overviewContainerClass}>
                        <OverviewSectionWrapper>
                            <Title>
                                Infrastructure has <TitleHighlight>evolved.</TitleHighlight><br/>
                                So did the tools we use to build the web.
                            </Title>
                            <SubTitle>
                                Webiny makes it easy to build websites, apps and APIs on top of serverless infrastructure
                                like AWS Lambda.
                            </SubTitle>
                            <Caption>
                                Got 15 minutes? Here is an overview of Webiny by our CEO
                            </Caption>
                        </OverviewSectionWrapper>
                    </ContentContainer>
                </Section>
                <SectionWithBg>
                    <ImageWrapper>
                        <div className={videoPreviewClass}><img src={videoPreviewBg} alt={""}/></div>
                        <YTVideoComponent img={PageBuilderDemoImg} id={'OQOmJZxT5dg'}/>
                    </ImageWrapper>
                </SectionWithBg>
            </Fragment>
        );
    }
}

export default WebinyOverview;
