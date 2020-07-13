import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ContentContainer from '../../ui/content-container';

import {CONTENT_LIST, NAV_LIST} from './serverless-challenges-data';
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
  SliderNav,
  ContentWrapper,
  cardWrapperClass,
} from './serverless-challenges-styles';

class ServerlessChallenges extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      activeTabIndex: 0,
    };
  }

  render () {
    const selectedData = CONTENT_LIST[this.state.activeTabIndex];
    return (
      <WhyServerlessSection {...this.props}>
        <ContentContainer className={whyServerlessContainerClass}>
          <Title>
            Serverless <TitleHighlight>challenges</TitleHighlight>
          </Title>
          <SubTitle>
            Transition to serverless unfortunately doesn’t come without a series of challenges you’ll
            need to overcome.
            A survey done on over 1500 companies, that were moving to serverless, has shown us what are the biggest
            challenges on why an organisation hasn’t yet adopted serverless or the challenges they are facing after the adoption:

          </SubTitle>
          <SliderWrapper>
            <TransitionGroup className={containerClass}>
              <CSSTransition
                key={selectedData.id}
                timeout={400}
                classNames={'fade'}
              >
                <LeftSliderWrapper>
                  <TextContent>
                    <h4 className={'title'}>{selectedData.title}</h4>
                    <p className={'body'}>{selectedData.description}</p>
                  </TextContent>
                  <MediaContent>
                    <img src={selectedData.imageSrc} alt={''} />
                  </MediaContent>
                </LeftSliderWrapper>
              </CSSTransition>
            </TransitionGroup>
            <RightSliderWrapper>
              {NAV_LIST.map (l => {
                return (
                  <SliderNav
                    key={l.id}
                    className={
                      this.state.activeTabIndex === l.id ? 'active' : ''
                    }
                    onClick={() => this.setState ({activeTabIndex: l.id})}
                  >
                    <span>{l.title}</span>
                    <div className={'icon'}>{l.title[0]}</div>
                  </SliderNav>
                );
              })}
            </RightSliderWrapper>
          </SliderWrapper>
          <ContentWrapper>
            {CONTENT_LIST.map (item => (
              <LeftSliderWrapper key={item.id} className={cardWrapperClass}>
                <TextContent>
                  <h4 className={'title'}>{item.title}</h4>
                  <p className={'body'}>{item.description}</p>
                </TextContent>
                <MediaContent>
                  <img src={item.imageSrc} alt={''} />
                </MediaContent>
              </LeftSliderWrapper>
            ))}
          </ContentWrapper>
        </ContentContainer>
      </WhyServerlessSection>
    );
  }
}

export default ServerlessChallenges;
