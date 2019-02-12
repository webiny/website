import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  marginTop: 25,
  marginBottom: 75,
});

const Grid = styled ('div') (
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    marginBottom: 100,
  },
  mq ({
    flexDirection: ['column', 'row'],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ['0 25px', 0],
  })
);

const Cell = styled ('div') (
  {
    boxSizing: 'border-box',
    textAlign: 'center',
    flexBasis: '100%',
    borderBottom: '5px solid ' + theme.color.primaryDark,
    borderRadius: 5,
    marginRight: 40,
    display: 'flex',
    flexDirection: 'row',
    '&:last-child': {
      marginRight: '0 !important',
    },
  },
  mq ({
    width: ['100%', 300],
  })
);

const Number = styled ('h3') ({
  fontSize: 96,
  width: 100,
  lineHeight: '100px',
  marginBottom: 20,
  marginTop: 0,
  textAlign: 'left',
  marginLeft: 10,
});

const Text = styled ('p') ({
  fontSize: 32,
  width: 200,
  textAlign: 'left',
  fontWeight: theme.fontWeight.semiBold,
  marginTop: 5,
  marginBottom: 20,
  '.orange': {
    color: theme.color.primaryDark,
  },
});

class Serverless extends React.Component {
  render () {
    return (
      <section {...this.props}>
        <SubTitle>What you can do with Webiny</SubTitle>

        <ContentContainer>
          <Grid>
            <Cell
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-offset="200"
            >
              <Number>1.</Number>
              <Text>Create <span className="orange">websites</span></Text>
            </Cell>
            <Cell
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <Number>2.</Number>
              <Text>Build <br /><span className="orange">APIs</span></Text>
            </Cell>
            <Cell
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-offset="200"
            >
              <Number>3.</Number>
              <Text>
                Make
                {' '}
                <span className="orange">web</span>
                <br />
                <span className="orange">applications</span>
              </Text>
            </Cell>
          </Grid>
        </ContentContainer>
      </section>
    );
  }
}

export default Serverless;
