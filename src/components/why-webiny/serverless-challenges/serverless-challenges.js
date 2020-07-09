import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ContentContainer from '../../ui/content-container';

import {CONTENT_LIST, NAV_LIST} from "./serverless-challenges-data";
import {
    WhyServerlessSection,
    whyServerlessContainerClass,
    TitleHighlight,
    Title,
    SubTitle,
    SliderWrapper,
    containerClass,
    LeftSliderWrapper,
    TextContent,
    MediaContent,
    RightSliderWrapper,
    SliderNav
} from './serverless-challenges-styles';

class ServerlessChallenges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 2,
        };
    }

    render() {
        const selectedData = CONTENT_LIST[this.state.activeTabIndex];
        return (
            <WhyServerlessSection {...this.props}>
                <ContentContainer className={whyServerlessContainerClass}>
                    <Title>
                        Serverless <TitleHighlight>challenges</TitleHighlight>
                    </Title>
                    <SubTitle>
                        Transition to serverless unfortunately doesn’t come without a series of challenges that you’ll
                        need to overcome.
                        A survey done with over 1500 companies that were moving to serverless has shown that the biggest
                        challenges why an organisation hasn’t yet adopted serverless or is facing after adoption:

                    </SubTitle>
                    <SliderWrapper>
                        <TransitionGroup className={containerClass}>
                            <CSSTransition key={selectedData.id} timeout={400} classNames={"fade"}>
                                <LeftSliderWrapper>
                                    <TextContent>
                                        <h4 className={'title'}>{selectedData.title}</h4>
                                        <p className={'body'}>{selectedData.description}</p>
                                    </TextContent>
                                    <MediaContent>
                                        <img src={selectedData.imageSrc} alt={""}/>
                                    </MediaContent>
                                </LeftSliderWrapper>
                            </CSSTransition>
                        </TransitionGroup>
                        <RightSliderWrapper>
                            {NAV_LIST.map(l => {
                                return (
                                    <SliderNav
                                        key={l.id}
                                        className={this.state.activeTabIndex === l.id ? 'active' : ''}
                                        onClick={() => this.setState({activeTabIndex: l.id})}
                                    >
                                        <span>{l.title}</span>
                                        <div className={'icon'}>{l.title[0]}</div>
                                    </SliderNav>
                                );
                            })}
                        </RightSliderWrapper>
                    </SliderWrapper>
                </ContentContainer>
            </WhyServerlessSection>
        );
    }
}

export default ServerlessChallenges;
