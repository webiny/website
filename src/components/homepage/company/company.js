import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

import sectionBg from './assets/grey-bg.svg';
import amazonLogo from './assets/amazon.svg';
import microsoftLogo from './assets/microsoft.svg';
import tencentLogo from './assets/tencent.svg';
import biaduLogo from './assets/baidu.svg';
import alibabaLogo from './assets/alibaba.svg';
import salesforceLogo from './assets/salesforce.svg';
import IBMLogo from './assets/IBM.svg';
import intuitLogo from './assets/Intuit.svg';
import accentureLogo from './assets/accenture.svg';
import teslaLogo from './assets/tesla.svg';

const wrapperClass = css(
    {
        backgroundImage: 'url(' + sectionBg + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    mq({
        padding: [0, 0]
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
        padding: ['60px 0px 120px', '16px 0px 80px']
    })
);

const LogosWrapper = styled('div')(
    {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 930
    },
    mq({
        flexDirection: ['column', 'row'],
        margin: ['0px 0px 50px', '0px auto 50px'],
        '& img': {
            marginRight: [0, 60],
            marginBottom: [24, 24]
        }
    })
);

const SubTitle = styled('h4')({
    fontSize: 16,
    fontWeight: 700,
    color: theme.color.darkPurple,
    textAlign: 'center',
    maxWidth: 360,
    margin: '0px auto 44px'
});

class ClientsLogo extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <ContentContainer className={contentContainerClass}>
                    <SubTitle>Webiny is being used by developers from:</SubTitle>

                    <LogosWrapper>
                        <img src={amazonLogo} alt={'amazon logo'}/>
                        <img src={microsoftLogo} alt={'microsoft logo'}/>
                        <img src={tencentLogo} alt={'tencent logo'}/>
                        <img src={biaduLogo} alt={'baidu logo'}/>
                        <img src={alibabaLogo} alt={'alibaba logo'}/>

                        <img src={salesforceLogo} alt={'salesforce logo'}/>
                        <img src={IBMLogo} alt={'IBM logo'}/>
                        <img src={intuitLogo} alt={'intuit logo'}/>
                        <img src={accentureLogo} alt={'accenture logo'}/>
                        <img src={teslaLogo} alt={'tesla logo'}/>
                    </LogosWrapper>
                </ContentContainer>
            </section>
        );
    }
}

export default ClientsLogo;
