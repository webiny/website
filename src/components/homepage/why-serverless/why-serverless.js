import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import Button from '../../ui/button';

import sectionBg from './assets/why-webiny-bg.svg';
import whyWebinyBg from './assets/webiny-logo.svg';
import whyServerlessBg from './assets/serverless.svg';
import bgWebiny from './assets/bg-orange.svg';
import bgServerless from './assets/bg-serverless.svg';
import orangeCircleBg from './assets/orange-circle-bg.svg';
import purpleCircleBg from './assets/purple-circle-bg.svg';

const wrapperClass = css(
    {
        backgroundImage: 'url(' + sectionBg + ')',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        zIndex: 0
    },
    mq({
        padding: ['0 15px 25px 15px', '25px 0 25px 0']
    })
);

const contentContainerClass = css(
    {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 1200,
        boxSizing: 'border-box'
    },
    mq({
        width: ['100%', '100%'],
        height: ['100%', 'auto'],
        padding: ['120px 0px', '0']
    })
);

const Title = styled('h2')({
    fontSize: 36,
    fontWeight: 700,
    color: theme.color.black,
    margin: 0,
    marginBottom: 10
});

const Body = styled('h2')({
    fontSize: 18,
    color: theme.color.black,
    margin: 0
});

const TitleHighlight = styled('span')(props => ({
    backgroundImage: 'url(' + props.imgUrl + ')',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',
    backgroundRepeat: 'no-repeat'
}));

const CardsWrapper = styled('div')(
    {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        '&::before': {
            content: 'url(' + purpleCircleBg + ')',
            position: 'absolute',
            width: 182,
            height: 182,
            left: "30%",
            bottom: "25%",
            zIndex: -1
        },
        '&::after': {
            content: 'url(' + orangeCircleBg + ')',
            position: 'absolute',
            width: 330,
            height: 330,
            right: "10%",
            top: "0%",
            zIndex: -1
        }
    },
    mq({
        alignItems: ['center', 'flex-start'],
        '&::before': {
            display: ['none', 'block']
        },
        '&::after': {
            display: ['none', 'block']
        }
    })
);

const Card = styled('div')(
    {
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: theme.color.white,
        boxShadow: '2px 3px 15px rgba(100, 100, 100, 0.239216)',
        borderRadius: 6
    },
    mq({
        width: ['90%', 540],
        height: ['auto', 220],
        flexDirection: ['column', 'row'],
        marginBottom: [40, 0]
    })
);

const Content = styled('div')(
    {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    mq({
        width: ['100%', '66%'],
        padding: ['24px 30px', '36px 44px']
    })
);

const Banner = styled('div')(
    props => ({
        boxSizing: 'border-box',
        backgroundColor: props.backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: props.roundCornor === 'left' ? 6 : 0,
        borderBottomRightRadius: props.roundCornor === 'right' ? 6 : 0,
        borderTopLeftRadius: props.roundCornor === 'left' ? 6 : 0,
        borderTopRightRadius: props.roundCornor === 'right' ? 6 : 0
    }),
    mq({
        width: ['100%', '34%'],
        height: [150, '100%']
    })
);

const WhyWebinyImage = styled('img')({
    width: 81,
    height: 90
});

const WhyServerlessImage = styled('img')({
    width: 127,
    height: 61
});

const serverlessCardClass = css(
    {},
    mq({
        transform: ['none', 'translate(40%, 0%)', 'translate(50%, 0%)']
    })
);

const webinyClass = css(
    {},
    mq({
        flexDirection: ['column-reverse', 'row'],
        transform: ['none', 'translate(80%, -20%)', 'translate(90%, -20%)']
    })
);

const ButtonWrapper = styled('div')({
    margin: '40px auto 0px'
});

const ctaButton = css(
    {
        textTransform: 'uppercase',
        padding: '12px 60px !important'
    },
    mq({
        width: ['90%', '452px !important']
    })
);

class WhyWebinyWhyServerless extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <ContentContainer className={contentContainerClass}>
                    <CardsWrapper>
                        <Card className={serverlessCardClass}>
                            <Banner backgroundColor={theme.color.purple} roundCornor={'left'}>
                                <WhyServerlessImage src={whyServerlessBg} alt={'serverless stack'}/>
                            </Banner>
                            <Content>
                                <Title>
                                    Why <TitleHighlight imgUrl={bgServerless}>Serverless?</TitleHighlight>
                                </Title>
                                <Body>
                                    Reduces the cost of infrastructure by 60-80%, however it also comes with many
                                    hidden challenges.
                                </Body>
                            </Content>
                        </Card>

                        <Card className={webinyClass}>
                            <Content>
                                <Title>
                                    Why <TitleHighlight imgUrl={bgWebiny}>Webiny?</TitleHighlight>
                                </Title>
                                <Body>
                                    Get around serverless challenges and save over $300k in development costs.
                                </Body>
                            </Content>
                            <Banner backgroundColor={theme.color.primaryDark} roundCornor={'right'}>
                                <WhyWebinyImage src={whyWebinyBg} alt={''}/>
                            </Banner>
                        </Card>
                    </CardsWrapper>
                    <ButtonWrapper>
                        <Button className={ctaButton} type={'secondary'} link={'serverless-web-development-framework'}>
                            Learn more about serverless & how Webiny can help
                        </Button>
                    </ButtonWrapper>
                </ContentContainer>
            </section>
        );
    }
}

export default WhyWebinyWhyServerless;
