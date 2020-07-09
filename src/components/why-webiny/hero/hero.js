import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

import heroBg from './assets/hero-bg.svg';
import webinyBg from './assets/webiny-bg.svg';

const HeroSection = styled('section')(
    {
        backgroundColor: theme.color.white,
        position: 'relative',
        zIndex: 0,
        backgroundImage: 'url(' + heroBg + ')',
        backgroundRepeat: 'no-repeat'
    },
    mq({
        backgroundSize: ['cover', 'auto', '100%'],
        backgroundPosition: ['left', 'top', 'top', 'center'],
        padding: ['0px 0px 110px', '0'],
        '@media (min-width: 1460px)': {
            backgroundPosition: 'bottom',
            paddingTop: 0
        }
    })
);

const heroContainerClass = css(
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 1200,
        position: 'relative'
    },
    mq({
        width: ['100%', '100%'],
        height: ['100%', 425],
        padding: ['75px 0px 0px', '85px 0px 0px'],
        '@media (min-width: 2000px)': {
            paddingBottom: 80,
        }
    })
);

const HeroSectionWrapper = styled('div')(
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
        maxWidth: 768,
        fontSize: theme.fontSize['5xl'],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.white,
        textAlign: 'center',
        lineHeight: '48px',
        marginBottom: 20,
        marginTop: 90
    },
    mq({
        marginLeft: [0, 'auto'],
        marginRight: [0, 'auto']
    })
);

const SubTitle = styled('h3')(
    {
        fontSize: theme.fontSize['2xl'],
        fontWeight: theme.fontWeight.regular,
        lineHeight: '34px',
        marginTop: 0,
        marginBottom: 26,
        color: theme.color.white,
        textAlign: 'center'
    },
    mq({
        maxWidth: [337, 590],
        marginLeft: [0, 'auto'],
        marginRight: [0, 'auto']
    })
);

const WebinyHallMarkImage = styled('img')({
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        height: '100%'
    },
    mq({
        width: ['100%', '100%'],
        maxHeight: ['unset', 856]
    })
);

class HeroComponent extends React.Component {
    render() {
        const {handleDemoClick, ...restProps} = this.props;
        return (
            <HeroSection {...restProps}>
                <ContentContainer className={heroContainerClass}>
                    <WebinyHallMarkImage src={webinyBg} alt={''}/>
                    <HeroSectionWrapper>
                        <Title>
                            Why Webiny?
                        </Title>
                        <SubTitle>
                            Discover the serverless benefits, its challenges and how Webiny overcomes them.
                        </SubTitle>

                    </HeroSectionWrapper>
                </ContentContainer>
            </HeroSection>
        );
    }
}

export default HeroComponent;
