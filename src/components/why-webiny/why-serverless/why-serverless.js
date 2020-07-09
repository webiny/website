import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

import whyServerlessBg from './assets/why-serverless-bg.svg';
import rectangleBg from './assets/serverless-bg.svg'
import manageServerImg from './assets/server-management.svg';
import payMoreImg from './assets/stop-paying.svg';
import fasterImg from './assets/faster.svg';
import scalingImg from './assets/scaling.svg';

const WhyServerlessSection = styled('section')(
    {
        backgroundColor: theme.color.white,
        position: 'relative',
        zIndex: 0,
        backgroundImage: 'url(' + whyServerlessBg + ')',
        backgroundRepeat: 'no-repeat'
    },
    mq({
        backgroundSize: ['cover', 'auto', '100%'],
        backgroundPosition: ['center', 'top', 'top', 'center'],
        padding: ['0px 15px 110px', '0px 15px'],
        '@media (min-width: 1460px)': {
            backgroundPosition: 'bottom',
            paddingTop: 0
        }
    })
);

const whyServerlessContainerClass = css(
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 1200,
        position: 'relative'
    },
    mq({
        width: ['100%', '100%'],
        padding: ['220px 0px 0px', '185px 0px']
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
        marginBottom: 24
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
        marginBottom: 60,
        color: theme.color.dark,
        textAlign: 'center',
        '& span': {
            color: theme.color.purple,
            fontWeight: theme.fontWeight.bold
        }
    },
    mq({
        maxWidth: ['100%', 863],
        marginLeft: [0, 'auto'],
        marginRight: [0, 'auto']
    })
);

const BenefitsWrapper = styled('div')(
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        position: 'relative'
    }
);

const BenefitBox = styled('div')(
    {
        display: 'flex',
        maxWidth: 840,
        backgroundColor: theme.color.white,
        borderRadius: 8,
        position: 'relative',

        '& .text-content': {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '70px 0px 70px 60px',
            '& .title': {
                color: theme.color.black,
                fontSize: theme.fontSize["4xl"],
                fontWeight: theme.fontWeight.bold,
                margin: "0px 0px 6px",
                '& span': {
                    color: theme.color.purple
                }
            },
            '& .body': {
                maxWidth: 497,
                color: theme.color.gray300,
                fontSize: theme.fontSize["lg"],
                margin: 0,
            }
        },
        '& .media-content': {
            width: "25%",
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            '& .img-wrapper': {
                width: 222,
                height: 222,
                backgroundColor: theme.color.white,
                borderRadius: '50%',
                transform: 'translateX(36%)'
            }
        }
    },
    mq({
        flexDirection: ['column', 'row'],
        transform: ['none', 'translateX(-5%)', 'translateX(-15%)'],
        width: ['100%', '100%'],
        height: ['auto', 275],
        marginBottom: [100, 60],

        '& .text-content': {
            width: ['100%', '75%'],
            padding: ['16px', '70px 0px 70px 60px'],
        },
        '& .media-content': {
            width: ['100%', '25%'],
            justifyContent: ['center', 'flex-start'],
            '& .img-wrapper': {
                transform: ['translateY(20%)', 'translateX(36%)'],
            }
        }

    })
);

const rightToLeftClass = css(
    {},
    mq({
        flexDirection:  ['column', 'row-reverse'],
        transform: ['none', 'translateX(5%)', 'translateX(15%)'],
        '& .text-content': {
            width: ['100%', '75%'],
            padding: ['16px', '70px 60px 70px 0px'],
        },
        '& .media-content': {
            width: ['100%', '25%'],
            '& .img-wrapper': {
                transform: ['translateY(20%)', 'translateX(-36%)'],
            }
        }
    })
);

class WhyServerlessComponent extends React.Component {
    render() {
        return (
            <WhyServerlessSection {...this.props}>
                <ContentContainer className={whyServerlessContainerClass}>
                    <Title>
                        Why <TitleHighlight>Serverless</TitleHighlight>
                    </Title>
                    <SubTitle>
                        Serverless is making big changes to how we operate, deploy, architect and run applications.
                        By moving to serverless you are estimated to save between <span> 60 and 80% of your infrastructure and maintenance costs. </span><br />
                        But there are many other benefits that serverless brings:
                    </SubTitle>

                    <BenefitsWrapper>
                        <BenefitBox>
                            <div className={'text-content'}>
                                <h2 className={'title'}><span>Forget</span> about server management</h2>
                                <p className={'body'}>
                                    Servers are still there, but they are abstracted away and managed by your cloud provider.
                                    They are not your problem anymore, the same goes for load balancers and autoscaling.
                                </p>
                            </div>
                            <div className={'media-content'}>
                                <div className={'img-wrapper'}>
                                    <img src={manageServerImg} alt={""}/>
                                </div>
                            </div>
                        </BenefitBox>
                        <BenefitBox className={rightToLeftClass}>
                            <div className={'text-content'}>
                                <h2 className={'title'}><span>Stop paying</span> for stuff you don't use</h2>
                                <p className={'body'}>
                                    Pay for each function execution. This means you don’t need to over-provision and thus over-pay for infrastructure.
                                    Especially for those periods of peak demand.
                                </p>
                            </div>
                            <div className={'media-content'}>
                                <div className={'img-wrapper'}>
                                    <img src={payMoreImg} alt={""}/>
                                </div>
                            </div>
                        </BenefitBox>
                        <BenefitBox>
                            <div className={'text-content'}>
                                <h2 className={'title'}><span>Build</span> things faster</h2>
                                <p className={'body'}>
                                    Because all you need to do is deploy your code, you won't lose time on spinning up and configuring servers.
                                    As a result you’ll iterate and launch products faster.
                                </p>
                            </div>
                            <div className={'media-content'}>
                                <div className={'img-wrapper'}>
                                    <img src={fasterImg} alt={""}/>
                                </div>
                            </div>
                        </BenefitBox>
                        <BenefitBox className={rightToLeftClass}>
                            <div className={'text-content'}>
                                <h2 className={'title'}><span>No more</span> scaling headaches</h2>
                                <p className={'body'}>
                                    Serverless functions spin up in milliseconds the moment there is a demand increase.
                                    The newly created functions are immediately ready to handle new requests. And you, just sit and relax.
                                </p>
                            </div>
                            <div className={'media-content'}>
                                <div className={'img-wrapper'}>
                                    <img src={scalingImg} alt={""}/>
                                </div>
                            </div>
                        </BenefitBox>
                    </BenefitsWrapper>

                </ContentContainer>
            </WhyServerlessSection>
        );
    }
}

export default WhyServerlessComponent;
