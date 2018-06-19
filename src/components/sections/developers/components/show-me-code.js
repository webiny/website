import React from 'react'
import styled from 'react-emotion'
import ContentContainer from '../../../ui/content-container'
import Tabs from '../../../ui/tabs'
import theme from '../../../utils/theme'
import CodeBlock from '../../../ui/code-block'

import showMeCode from '../assets/show-me-code.svg'

const Title = styled('h4')({
  position: 'relative',
})

const TitleImg = styled('img')({
  display: 'block',
  margin: '0 auto',
})

const LineLeft = styled('div')({
  borderBottom: '1px solid ' + theme.color.darkGray,
  position: 'absolute',
  width: theme.contentWidth / 2 - 200 + 'px',
  top: '50%',
  left: 0,
  zIndex: 9,
  margin: '0 auto',
})

const LineRight = styled('div')({
  borderBottom: '1px solid ' + theme.color.darkGray,
  position: 'absolute',
  top: '50%',
  right: 0,
  width: theme.contentWidth / 2 - 200 + 'px',
  zIndex: 9,
  margin: '0 auto',
})

const SubText = styled('p')({
  fontSize: theme.fontSize.subText,
  fontWeight: theme.fontWeight.regular,
  color: theme.color.white,
  textAlign: 'center',
  margin: '0 20%',
  lineHeight: '150%',
  marginBottom: 50,
})

// prettier-ignore
const OrmCodeSample = `import User from "./user.entity.js";
​
const user = await User.findOne({query: {email: "john.doe@webiny.com"}});
console.log(user.firstName); // John
​
const company = await user.company;
console.log(company.name); // A test company

// print the whole User object
console.log(user);

/*
{
  email: "john.doe@webiny.com",
  password: "12345678",
  firstName: "John",
  lastName: "Doe",
  age: 30,
  enabled: true,
  company: { name: "A test company", type: "it" }
}
*/`

// prettier-ignore
const TranslationsCodeSample = `import React from "react";
import { i18n, createComponent } from "webiny-app";
const t = i18n.namespace("MyApp.ContactInformation");

class ContactInformation extends React.Component {
    render() {
        const phoneNumber = this.props.phoneNumber;
        const emailLink = <a href={\`mailto:$\{this.props.email}\`}>{this.props.email}</a>;
        
        return (
            <div>
                <div>{t\`Contact information\`}</div>
                <ul>
                    <li>{t\`By phone: {phoneNumber}\`({ phoneNumber })}</li>
                    <li>
                        {t\`Or send an email to {emailLink}.\`({ emailLink })}
                    </li>
                </ul>
            </div>
        );
    }
}

export default createComponent(ContactInformation);`

class ShowMeCode extends React.Component {
  state = {
    items: [
      {
        title: 'ORM',
        subTitle: 'Get a user account matching a specific email address.',
        content: <CodeBlock code={OrmCodeSample} language="javascript" />,
      },
      {
        title: 'Translations (i18n)',
        subTitle: 'Add translation support to your custom made component.',
        content: (
          <CodeBlock code={TranslationsCodeSample} language="javascript" />
        ),
      },
      {
        title: 'Client API',
        subTitle:
          'From the client side, call the Webiny API and load the list of all active pages.',
        content: 'test',
      },
    ],
  }
  render() {
    return (
      <ContentContainer>
        <Title>
          <LineLeft />
          <TitleImg src={showMeCode} />
          <LineRight />
        </Title>
        <SubText>
          There is no better way to get inspired than by seeing practical code
          examples how Webiny can help you build your next project. From server
          side, to translations, GraphQL API, to finally the frontend, Webiny
          covers it all.
        </SubText>
        <Tabs items={this.state.items} />
      </ContentContainer>
    )
  }
}

export default ShowMeCode
