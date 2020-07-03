import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import Button from '../../ui/button';
import ContentContainer from '../../ui/content-container';
import PipeDriveForm from './pd-form';

import purpleBg from './assets/purple-rectangle.svg';
import dropDownIcon from './assets/dropdown-icon.svg';

const wrapperClass = css (
  {
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundImage: 'url(' + purpleBg + ')',
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
  },
  mq ({
    backgroundSize: ['cover', 'cover'],
    paddingTop: [0, 0],
    paddingBottom: [0, 0],
    marginTop: [-110, -90],
  })
);

const contentContainerClass = css (
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1200,
  },
  mq ({
    width: ['100%', '100%'],
    height: ['100%'],
    paddingTop: [80, 180],
    paddingBottom: [80, 146],
    marginBottom: [0, 0],
  })
);

const TextWrapper = styled ('div') (
  {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 60,
  },
  mq ({
    paddingTop: [40, 0],
  })
);

const Title = styled ('h2') ({
  fontSize: 48,
  fontWeight: theme.fontWeight.bold,
  color: theme.color.white,
  lineHeight: '42px',
  textAlign: 'center',
  paddingTop: 0,
  margin: 0,
});

const Form = styled ('form') (
  {
    width: '100%',
    maxWidth: 824,
    marginBottom: 48,
  },
  mq ({
    padding: ['0px 16px', 0],
  })
);

const Input = styled ('input') ({
  display: 'block',
  margin: '0 auto',
  boxSizing: 'border-box',
  width: '100%',
  marginBottom: 25,
  padding: 15,
  fontSize: theme.fontSize.paragraph,
  fontWeight: theme.fontWeight.regular,
  border: '1px solid ' + theme.color.darkGray,
  backgroundColor: theme.color.lightGray,
  borderRadius: 4,
  outline: 'none',
  transition: '225ms all',
  '&:focus, &:active': {
    border: '1px solid ' + theme.color.grayText,
  },
});

const SelectMenu = styled ('select') ({
  display: 'block',
  margin: '0 auto',
  boxSizing: 'border-box',
  width: '100%',
  marginBottom: 25,
  padding: 15,
  fontSize: theme.fontSize.paragraph,
  fontWeight: theme.fontWeight.regular,
  border: '1px solid ' + theme.color.darkGray,
  color: theme.color.grayText,
  backgroundColor: theme.color.lightGray,
  borderRadius: 4,

  appearance: 'none',
  backgroundImage: 'url(' + dropDownIcon + ')',
  backgroundRepeat: 'no-repeat, repeat',
  backgroundPosition: 'right .7em top 50%, 0 0',
  backgroundSize: '21px auto, 100%',

  outline: 'none',
  transition: '225ms all',
  '&:focus, &:active': {
    border: '1px solid ' + theme.color.grayText,
  },
});

const Row = styled ('div') (
  {
    display: 'flex',
  },
  mq ({
    flexDirection: ['column', 'row'],
    alignItems: ['center'],
  })
);

const twoColsInARowClass = css (
  {},
  mq ({
    width: ['80%', '50%'],
    maxWidth: 397,
    '&:first-child': {
      marginRight: [0, 30],
      marginLeft: [0, 0],
    },
  })
);

const Textarea = styled ('textarea') (
  {
    display: 'block',
    margin: '0 auto',
    boxSizing: 'border-box',
    marginBottom: 0,
    height: 150,
    padding: 15,
    fontSize: theme.fontSize.paragraph,
    fontWeight: theme.fontWeight.regular,
    border: '1px solid ' + theme.color.darkGray,
    backgroundColor: theme.color.lightGray,
    borderRadius: 4,
    outline: 'none',
    transition: '225ms all',
    '&:focus, &:active': {
      border: '1px solid ' + theme.color.grayText,
    },
  },
  mq ({
    width: ['80%', '100%'],
    maxWidth: [397, '100%'],
  })
);

const ctaButton = css (
  {
    margin: '48px auto 0px !important',
    textTransform: 'uppercase',
    zIndex: 1,
    maxWidth: 397,
  },
  mq ({
    width: ['80% !important', '360px !important'],
  })
);

class ScheduleDemo extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      name: '',
      email: '',
      company: '',
      reason: '',
      comment: '',
    };
  }

  handleChange = event => {
    this.setState ({[event.target.name]: event.target.value});
  };

  render () {
    const {refFromParent, ...restProps} = this.props;
    return (
      <section ref={refFromParent} {...restProps} className={wrapperClass} id={'schedule-demo'}>
        <ContentContainer className={contentContainerClass}>
          <TextWrapper>
            <Title>
              Schedule a 1:1 demo
            </Title>

          </TextWrapper>

          <PipeDriveForm formId={'39fae8006d4815450b9516dde1daa5697489402'} />

          {/* 
          <Form
            id="schedule-a-demo"
            onSubmit={event => {
              event.preventDefault ();
              // Simple validation
              if (
                this.state.name.trim () &&
                this.state.email.trim () &&
                this.state.company.trim () &&
                this.state.reason.trim () &&
                this.state.comment.trim ()
              ) {
                console.log ('All good!');
                console.log (this.state);
              } else {
                console.log ('Strings with whitespace are no good!');
              }
            }}
          >
            <Row>
              <Input
                name="name"
                className={twoColsInARowClass}
                placeholder="Name"
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
                required
              />
              <Input
                name="email"
                className={twoColsInARowClass}
                placeholder="Email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />
            </Row>
            <Row>
              <Input
                name="company"
                className={twoColsInARowClass}
                placeholder="Company"
                type="text"
                onChange={this.handleChange}
                value={this.state.company}
                required
              />
              <SelectMenu
                name="reason"
                className={twoColsInARowClass}
                onChange={this.handleChange}
                value={this.state.reason}
                required
              >
                <option value="" disabled>
                  What do you want to talk about
                </option>
                <option value="learn_more">Learn more about Webiny</option>
                <option value="discuss_a_project">
                  I have a project to discuss
                </option>
                <option value="other">Other</option>
              </SelectMenu>
            </Row>
            <Row>
              <Textarea
                name="comment"
                placeholder="Any other comments"
                onChange={this.handleChange}
                value={this.state.comment}
                required
              />
            </Row>
            <Button className={ctaButton} type="secondary">
              Schedule
            </Button>
          </Form>
          */}
        </ContentContainer>
      </section>
    );
  }
}

export default ScheduleDemo;
