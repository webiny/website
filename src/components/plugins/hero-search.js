import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../utils/theme';
import mq from '../utils/breakpoints';
import ContentContainer from '../ui/content-container';
import {DelayInput} from 'react-delay-input';
import PluginList from './list';
import Footer from './footer';

import heroBg from './assets/plugins-hero-bg.svg';

const Hero = styled ('section') (
  {
    width: '100%',
    background: 'url(' + heroBg + ') no-repeat center top',
    color: '#fff',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  mq ({
    padding: ['100px 20px 25px', '150px 0 25px'],
    marginBottom: [50, 100],
    backgroundSize: ['cover'],
    backgroundPosition: ['top', 'bottom', 'bottom'],
  })
);

const Title = styled ('h1') ({
  fontSize: theme.fontSize.h1,
  fontWeight: theme.fontWeight.semiBold,
  marginBottom: 15,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.white,
    textAlign: 'center',
    lineHeight: '150%',
    marginBottom: 15,
  },
  mq ({
    margin: ['20px 20px', '0 20% 40px 20%'],
  })
);

const InputWrapper = styled ('form') ({
  position: 'relative',
  width: '100%',
  maxWidth: 700,
  margin: '0 auto',
});

const inputStyle = css ({
  background: theme.color.white,
  border: '1px solid #979797',
  borderRadius: 8,
  fontSize: 18,
  padding: '15px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
});

const ResultNumber = styled ('p') ({
  fontSize: theme.fontSize.paragraph,
  fontWeight: theme.fontWeight.semiBold,
  textAlign: 'left',
  marginTop: 5,
});

class HerosSearch extends React.Component {
  keywords = 'gatsby-plugin';

  constructor (props) {
    super (props);

    this.state = {query: '', listResult: []};
    this.inputRef = React.createRef ();
  }

  handleChange = event => {
    let query = event.target.value;
    this.setState ({query}, () => {
      this.fetchResults (0);
    });
  };

  componentDidMount () {
    // first display the loading indicator
    this.fetchResults (0);
  }

  async fetchResults (from) {
    // query the registry
    const query =
      'https://api.npms.io/v2/search?q=' +
      (this.state.query !== '' ? this.state.query + '%20' : '') +
      'keywords%3A' +
      this.keywords +
      ',not:deprecated,not:unstable&size=6&from=' +
      from;
    console.log ('query:' + query);
    const response = await fetch (query);
    const pluginList = await response.json ();

    // render the results
    this.setState ({listResult: pluginList});
  }

  renderResultNumber () {
    if (
      typeof this.state.listResult !== 'object' ||
      this.state.listResult.total < 1
    ) {
      return 'Zero plugins found';
    }

    if (this.state.listResult.total > 1) {
      return this.state.listResult.total + ' plugins found';
    } else if (this.state.listResult.total === 1) {
      return 'Only one plugin found';
    }
  }

  render () {
    const resultNumber = this.renderResultNumber ();

    return (
      <React.Fragment>
        <Hero>
          <ContentContainer>
            <Title>Webiny Plugins</Title>
            <SubText>
              Find the right plugins for your Webiny apps.
            </SubText>
            <InputWrapper
              onSubmit={e => {
                e.preventDefault ();
              }}
            >
              <DelayInput
                className={inputStyle}
                minLength={2}
                delayTimeout={250}
                placeholder="Search plugins"
                onChange={this.handleChange}
                value={this.state.query}
                name="query"
                autoComplete="off"
              />
              <ResultNumber>
                {resultNumber}
              </ResultNumber>
            </InputWrapper>
          </ContentContainer>
        </Hero>
        <PluginList
          pluginList={this.state.listResult}
          query={this.state.query}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HerosSearch;
