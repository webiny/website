import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import ContentContainer from '../../ui/content-container';

import {
  whyServerlessContainerClass,
  WhyServerlessSection,
  Title,
  TitleHighlight,
  SubTitle,
  Text,
  ImageWrapper,
  infoImageClass,
  containerClass,
  LeftSliderWrapper,
  MediaContent,
  RightSliderWrapper,
  SliderNav,
  SliderWrapper,
  TextContent,
  cardWrapperClass,
  ContentWrapper,
} from './here-comes-webiny-styles';

import appStackImg from './assets/stack-infographic.svg';
import whatWebinyImg from './assets/webiny-what.svg';

import {CONTENT_LIST, NAV_LIST} from './here-comes-webiny-data';

class HereComesWebiny extends React.Component {
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
            That is where Webiny <TitleHighlight>comes in!</TitleHighlight>
          </Title>
          <Text>
            We like to say that Webiny is the easiest way to adopt serverless.
            Webiny has already solved these and many more challenges for you,
            so you can skip these steps and go straight to building your project.
          </Text>
          <ImageWrapper>
            <img
              className={infoImageClass}
              src={appStackImg}
              alt={'serverless stack'}
            />
            <img
              className={infoImageClass}
              src={whatWebinyImg}
              alt={'webiny stack'}
            />
          </ImageWrapper>
          <SubTitle>Just a few, of many, benefits Webiny brings</SubTitle>
          <SliderWrapper>
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

export default HereComesWebiny;
