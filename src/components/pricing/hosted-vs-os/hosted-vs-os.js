import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import Button from '../../ui/button';

import check from './assets/check.svg';
import arrow from './assets/gs-btn-arrow.svg';

const maxWidth = css ({
  maxWidth: 750,
}, mq({
  marginBottom: [0, 25]
}));

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 25,
  marginTop: 0,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.black,
    textAlign: 'center',
    margin: '0 20%',
    lineHeight: '150%',
    marginBottom: 50,
  },
  mq ({
    margin: ['0 20px', '0 20% 40px 20%'],
  })
);

const Table = styled("div")({
  display: 'grid',
  gridTemplateRows: '.7fr repeat(5,1fr)',
  gridTemplateColumns: '2fr 1fr 1fr',
  gridGap: '4px 4px',
  gap: '4px 4px',
  position: 'relative',
  marginBottom: 50
}, mq({
  marginLeft: [20, 0],
  marginRight: [20, 0],
}));

const Cell = styled("div")({
  display: 'flex',
  alignItems: 'center',
  textAlign:'center',
  justifyContent: 'center',
  backgroundColor: '#F3F3F3',
  fontWeight: theme.fontWeight.regular,
  //color: '#9B9B9B',
  '&:nth-child(3n-2)':{
    padding: '.9em .8em .9em 1em',
    justifyContent: 'flex-start',
    textAlign:'left',
    color: theme.color.black,
    fontWeight: theme.fontWeight.semiBold,
  },
  '&.header':{
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#9B9B9B',
    textTransform: 'uppercase',
    fontWeight: theme.fontWeight.semiBold
  },
  '>img, >span':{
    zIndex: 10
  },
  '>img':{
    marginRight: 15
  }
}, mq({
  fontSize: [14, 16],
  flexDirection: ['column', 'row'],
  '>img':{
    marginRight: [0, 15]
  }
}))

const highlight = css`
    position: absolute;
    bottom: -4px;
    right: -4px;
    width: 10px;
    height: 10px;
    background-color: rgba(255,255,255,0.5);
    z-index: 5;
    width: calc(25% + 6px);
    height: calc(100% + 10px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    border-radius: 5px;
    -webkit-box-shadow: 0 3px 36px rgba(23,55,87,.1), 0 5px 15px rgba(0,0,0,.07);
    box-shadow: 0 3px 36px rgba(23,55,87,.1), 0 5px 15px rgba(0,0,0,.07);
`;

const SelectOption = styled('div')({
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  position: 'relative',
  'h4':{
    marginTop: 0
  },
  border: '1px solid '+theme.color.lightGray,
  boxShadow: '0 2px 4px 0 rgba(222,222,222,0.50)'
}, mq({
  flexDirection: ['column-reverse', 'row'],
  margin: [20, '0 0 50px 0']
}));

const OpenSource = styled('div')({
  textAlign: 'center',
  backgroundColor: theme.color.darkGray,
  boxSizing: 'border-box'
}, mq({
  width: ['100%', '50%'],
  padding: ['50px 15px 15px 15px', '25px 50px 25px 25px'],
}));

const WebinyCloud = styled('div')({
  textAlign: 'center',
  backgroundColor: theme.color.secondaryDark,
  boxSizing: 'border-box',
  color: theme.color.white
}, mq({
  width: ['100%', '50%'],
  padding: ['15px 15px 50px 15px', '25px 25px 25px 50px'],
}));

const Or = styled('div')({
  borderRadius: '50%',
  padding: '18px 20px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px 0 rgba(233,233,233,0.50)'
});

const button = css (
  {
    '> img': {
      marginLeft: 10,
    },
  },
  mq ({
    padding: [15, '14px 90px !important'],
  })
);

const Arrow = styled ('img') ({
  height: 9,
  marginLeft: 5,
});

class HostedVsOS extends React.Component {
  render () {
    return (
      <ContentContainer className={maxWidth}>
        <SubTitle>Hosted or Open Source</SubTitle>
        <SubText>
          Here are the differences between the two options.
        </SubText>

        <Table>
            <Cell className={"header"}></Cell>
            <Cell className={"header"}>Open Source</Cell>
            <Cell className={"header"}>Webiny Cloud</Cell>


            <Cell>Continuous database backups</Cell>
            <Cell>Manual</Cell>
            <Cell><img src={check}/> <span>Included</span></Cell>

            <Cell>Manage and renew SSL certificates</Cell>
            <Cell>Manual</Cell>
            <Cell><img src={check}/> <span>Included</span></Cell>

            <Cell>Scalable and resilient infrastructure</Cell>
            <Cell>Manual</Cell>
            <Cell><img src={check}/> <span>Included</span></Cell>

            <Cell>HSTS and HTTP to HTTPS redirect</Cell>
            <Cell>Manual</Cell>
            <Cell><img src={check}/> <span>Included</span></Cell>

            <Cell>Data replication and durability</Cell>
            <Cell>Manual</Cell>
            <Cell><img src={check}/> <span>Included</span></Cell>

            <Cell>Performance and usage monitoring</Cell>
            <Cell>Manual</Cell>
            <Cell><img src={check}/> <span>Included</span></Cell>

            <Cell>Content caching</Cell>
            <Cell>Manual</Cell>
            <Cell><img src={check}/> <span>Included</span></Cell>


            <Cell>Sleep worry free</Cell>
            <Cell>Manual</Cell>
            <Cell><img src={check}/> <span>Included</span></Cell>

          <div className={highlight}/>

        </Table>

        <SelectOption>
          <OpenSource>
            <h4>Open Source</h4>
            <Button fullWidth={true} link={"https://docs.webiny.com/"} className={button}>
              View the docs
              <Arrow alt="Get Started" src={arrow} />
            </Button>
          </OpenSource>
          <WebinyCloud>
            <h4>Webiny Cloud</h4>
            <Button fullWidth={true} class={button}>
              Create my site
              <Arrow alt="Get Started" src={arrow} />
            </Button>
          </WebinyCloud>
          <Or>OR</Or>
        </SelectOption>
      </ContentContainer>
    );
  }
}

export default HostedVsOS;