import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

import rectangleBg from './assets/diy-bg.svg';
import circleCheckImg from './assets/circle-check.svg';
import circleCrossImg from './assets/cricle-cross.svg';
import webinyLogoImg from './assets/webiny.svg';
import diyImg from './assets/diy.svg';
import DIYBg from './assets/bgDIY.svg';

const wrapperClass = css(
    {
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        overflowX: 'hidden'
    },
    mq({
        backgroundImage: ['none', 'url(' + DIYBg + ')'],
        padding: ['0 15px 25px 15px', '75px 0 25px 0']
    })
);

const contentContainerClass = css(
    {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 1200,
        boxSizing: 'border-box',
    },
    mq({
        width: ['100%', '100%'],
        height: ['100%', 'auto'],
        padding: ['60px 0px', '16px 0px 180px']
    })
);

const Title = styled('h2')({
    fontSize: 36,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
    textAlign: 'center',
    maxWidth: 440,
    margin: '0px auto 24px'
});

const TitleHighlight = styled('span')({
    backgroundImage: 'url(' + rectangleBg + ')',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',
    backgroundRepeat: 'no-repeat'
});

const SubTitle = styled('h4')({
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.gray300,
    lineHeight: '32px',
    textAlign: 'center',
    maxWidth: 863,
    margin: '0px auto 50px'
});


const BenefitBox = styled('div')(
    {
        display: 'flex',
        justifyContent: 'center',
        '& .content-wrapper': {
            position: 'relative'
        }
    },
    mq({
        flexDirection: ['column', 'row'],
        alignItems: ['center', 'flex-start']
    })
);

const vsClass = css({
    color: theme.color.dark,
    fontSize: 50,
    fontWeight: 700,
    margin: '0px 10px'
});

const CircleIcon = styled('img')({
    width: 20,
    height: 20
});

const DIYContent = styled('div')(
    {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: 4,

        '& .text-content': {
            fontSize: 16,
            lineHeight: 1,
            padding: "7px 16px 7px 30px",
            color: theme.color.dark,
            backgroundColor: theme.color.lightGray,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
        },
        '& .icon': {
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: theme.color.white,
            padding: "7px 10px",
            height: 35,
            borderBottomRightRadius: '50%',
            borderTopRightRadius: '50%',
            border: `1px solid ${theme.color.grayBorder}`,
            borderLeft: 0
        }
    },
    mq({
        '& .text-content': {
            width: ['100%', 'auto']
        }
    })
);

const WebinyContent = styled('div')(
    {
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: 4,

        '& .text-content': {
            fontSize: 16,
            lineHeight: 1,
            padding: "7px 30px 7px 16px",
            color: theme.color.white,
            background: 'linear-gradient(90deg, #FA5A28, #FF8965)',
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
        },
        '& .icon': {
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: theme.color.white,
            padding: "7px 10px",
            height: 35,
            borderBottomLeftRadius: '50%',
            borderTopLeftRadius: '50%',
            border: `1px solid ${theme.color.grayBorder}`,
            borderRight: 0
        }
    },
    mq({
        '& .text-content': {
            width: ['100%', 'auto']
        }
    })
);

const DIYImg = styled('div')(
    {
        display: 'flex',
        marginBottom: 40,
        '& img': {
            width: 64,
            height: 64
        }
    },
    mq({
        justifyContent: ['center', 'flex-end'],
        marginRight: [0, 40],
    })
);

const WebinyImg = styled('div')(
    {
        display: 'flex',
        marginBottom: 40,
        '& img': {
            width: 64,
            height: 64
        }
    },
    mq({
        justifyContent: ['center', 'flex-start'],
        marginLeft: [0, 40],
    })
);

const DIY_CONTENT_TEXT = [
    'Time consuming',
    'Increases the project cost',
    'Several attempts to get it right',
    'High risk of failing',
    'Need to figure out the right architecture',
    'Need to implement security best practices',
    'Hire additional staff with right expertise',
    'Need to create custom tooling',
    'Fear of the unknown',
    'Hard to test and debug',
    'Lack of know-how'
];

const WEBINY_CONTENT_TEXT = [
    'Faster time to market',
    'Much lower TCO',
    'Abstracts away all the serverless complexities',
    'Developers focus on their application logic from day one',
    'Reduces the risk of adopting serverless',
    'Proven performance and scale',
    'No need to reinvent the wheel',
    'Comes with already made products',
    'Deployment CLI with support for multiple environments',
    'Comes with an admin theme with over 30 React components',
    'Built in server side rendering',
    'Foundation for building dynamic serverless sites and apps',
    'Multi cloud support (coming soon)'
];

class ServerlessDIY extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <ContentContainer className={contentContainerClass}>
                    <Title>
                        How does it compare to<br />
                        <TitleHighlight>DIY approach?</TitleHighlight>
                    </Title>
                    <SubTitle>
                        So far, because of the lack of tooling solutions majority of companies that have decided to develop serverless&nbsp;
                        applications had to do this by taking the long and painful process of building the custom tooling themselves.
                        Webiny now provides you with a simple solution that eliminates all those challenges and allows you to focus your time completely on your business logic.
                    </SubTitle>
                    <BenefitBox>
                        <div className={'content-wrapper'}>
                            <DIYImg>
                                <img src={diyImg} alt={'do it yourself'}/>
                            </DIYImg>
                            {DIY_CONTENT_TEXT.map((text, index) => (
                                <DIYContent key={index} data-aos={'fade-right'} data-aos-delay={50 + (50 * index)}>
                                    <div className={'text-content'}>{text}</div>
                                    <div className={'icon'}>
                                        <CircleIcon src={circleCrossImg} alt={"red cross icon"}/>
                                    </div>
                                </DIYContent>
                            ))}
                        </div>
                        <p className={vsClass}>VS</p>
                        <div className={'content-wrapper'}>
                            <WebinyImg>
                                <img src={webinyLogoImg} alt={'Webiny'}/>
                            </WebinyImg>
                            {WEBINY_CONTENT_TEXT.map((text, index) => (
                                <WebinyContent key={index} data-aos={'fade-left'} data-aos-delay={50 + (50 * index)}>
                                    <div className={'icon'}>
                                        <CircleIcon src={circleCheckImg} alt={"green check icon"}/>
                                    </div>
                                    <div className={'text-content'}>{text}</div>
                                </WebinyContent>
                            ))}
                        </div>
                    </BenefitBox>
                </ContentContainer>
            </section>
        );
    }
}

export default ServerlessDIY;