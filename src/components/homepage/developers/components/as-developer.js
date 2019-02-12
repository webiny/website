import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';

import theme from '../../../utils/theme';
import mq from '../../../utils/breakpoints';
import ContentContainer from '../../../ui/content-container';

import asDevTitle from '../assets/as-developer-title.svg';
import bulletIcon from '../assets/baseline-check_circle-24px.svg';
import groupOfPeople from '../assets/as-dev-group-of-people.svg';

const TitleImg = styled ('img') ({
  display: 'block',
  margin: '20px auto',
});

const AsDevContainer = styled ('div') (
  {
    backgroundColor: theme.color.white,
  },
  mq ({
    padding: ['50px 0 0 0', '50px 0'],
  })
);

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
    margin: ['0 20px 20px', '0 20% 40px 20%'],
  })
);

const FlexContainer = styled ('div') (
  {},
  mq ({
    display: ['block', 'flex'],
  })
);

const FlexBox = styled ('div') (
  {
    boxSizing: 'border-box',
  },
  mq ({
    width: ['100%', '50%'],
    padding: [20, 0],
  })
);

const ReasonsList = styled ('ul') (
  {},
  mq ({
    marginRight: [20, 60],
  })
);

const ReasonsItem = styled ('li') ({
  background: 'url(' + bulletIcon + ') no-repeat left 2px',
  listStyle: 'none',
  paddingLeft: 40,
});

const ReasonsItemTitle = styled ('h5') ({
  textTransform: 'uppercase',
  fontWeight: theme.fontWeight.bold,
  fontSize: 18,
});

const ReasonsItemText = styled ('p') ({
  fontWeight: theme.fontWeight.regular,
  fontSize: 16,
});

const GroupOfPeople = styled ('img') (
  {
    display: 'block',
  },
  mq ({
    width: ['80%', 'auto'],
    margin: ['0 auto', 'auto'],
  })
);

const QuoteBase = css (
  {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 18,
    color: theme.color.grayText,
  },
  mq ({
    padding: ['25px 25px 0 25px', '25px 50px 0 50px'],
  })
);

const Quote = styled ('p') (QuoteBase);

const QuoteAuthor = styled ('p') (QuoteBase, {
  textAlign: 'right',
  padding: '0 50px',
});

class AsDeveloper extends React.Component {
  render () {
    return (
      <AsDevContainer>
        <TitleImg alt="As Developer" src={asDevTitle} />
        <SubText>
          you can expect to benefit from Webiny in the following ways:
        </SubText>
        <ContentContainer>
          <FlexContainer>
            <FlexBox
              data-aos="fade-right"
              data-aos-delay="450"
              data-aos-offset="300"
            >
              <ReasonsList>
                <ReasonsItem>
                  <ReasonsItemTitle>Efficiency</ReasonsItemTitle>
                  <ReasonsItemText>
                    Spend less time searching and finding components that
                    actually can work together.
                  </ReasonsItemText>
                </ReasonsItem>
                <ReasonsItem>
                  <ReasonsItemTitle>WORRY FREE SCALE</ReasonsItemTitle>
                  <ReasonsItemText>
                    Whether you're building a small website or already serving millions of users, Webiny has your back.
                  </ReasonsItemText>
                </ReasonsItem>
                <ReasonsItem>
                  <ReasonsItemTitle>IT’S A HAPPY MEAL</ReasonsItemTitle>
                  <ReasonsItemText>
                    Deliver even before your deadlines are due. Developing apps
                    and websites with Webiny takes significantly less time
                    because you have all the components you need, frontend,
                    backend, UI, API, it’s all here.
                  </ReasonsItemText>
                </ReasonsItem>
                <ReasonsItem>
                  <ReasonsItemTitle>PEACE OF MIND</ReasonsItemTitle>
                  <ReasonsItemText>
                    Because Webiny is designed as a set of numerous components
                    working seamlessly together, you will experience less bugs
                    and less problems while developing. Your clients will be
                    happy, and you will have a peace of mind.
                  </ReasonsItemText>
                </ReasonsItem>
              </ReasonsList>
            </FlexBox>
            <FlexBox
              data-aos="fade-left"
              data-aos-delay="450"
              data-aos-offset="300"
            >
              <GroupOfPeople alt="Group of People" src={groupOfPeople} />
              <Quote>
                You only live once, so spend less time coding, and more time with
                friends and family creating memories and experiences worth
                having.
              </Quote>
              <QuoteAuthor>- a wise developer</QuoteAuthor>
            </FlexBox>
          </FlexContainer>
        </ContentContainer>
      </AsDevContainer>
    );
  }
}

export default AsDeveloper;
