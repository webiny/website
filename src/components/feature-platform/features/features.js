import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

const CmsContainer = styled ('section') ({
  backgroundColor: theme.color.lightGray,
});

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  marginTop: 0,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    textAlign: 'center',
    lineHeight: '150%',
    marginBottom: 50,
    maxWidth: 750,
  },
  mq ({
    margin: ['0 20px', '0 auto'],
  })
);

const Grid = styled ('div') (
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    '&.first': {
      marginTop: 100,
      marginBottom: 50,
    },
  },
  mq ({
    flexDirection: ['column', 'row'],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ['0 25px', 0],
    '&.first': {
      margin: [0, '100px 0px'],
    },
  })
);

const Cell = styled ('div') (
  {
    boxSizing: 'border-box',
    flexBasis: '100%',
    h3: {
      fontSize: theme.fontSize.h4,
      color: theme.color.black,
      marginTop: 0,
      fontWeight: theme.fontWeight.bold,
      display: 'flex',
      alignItems: 'center',
      img: {
        marginRight: 20,
      },
    },
    p: {
      fontSize: theme.fontSize.paragraph,
      color: theme.color.black,
      lineHeight: '160%',
    },
    '&.headingCell': {
      h3: {
        fontSize: theme.fontSize.h2,
        fontWeight: theme.fontWeight.semiBold,
      },
      p: {
        fontSize: 18,
      },
    },
    '&:last-child': {
      marginRight: '0 !important',
    },
  },
  mq ({
    marginRight: [0, 50],
    textAlign: ['center', 'left'],
    '.image': {
      border: '1px solid #E6E6E6',
      boxShadow: '0 4px 8px 0 rgba(209,209,209,0.50)',
      borderRadius: 5,
      width: ['100%', '630px'],
    },
    '.image-small': {
      border: '1px solid #E6E6E6',
      boxShadow: '0 2px 4px 0 rgba(209,209,209,0.50)',
      borderRadius: 5,
      width: ['100%', '330px'],
    },
    h3: {
      justifyContent: ['center', 'flex-start'],
    },
  })
);

class Features extends React.Component {
  render () {
    return (
      <CmsContainer>
        <SubTitle data-aos="fade-up" data-aos-offset="300">
          Webiny CMS provides you with all the common components, but expect more!
        </SubTitle>
        <SubText data-aos="fade-up" data-aos-delay="250" data-aos-offset="300">
          We’ve built Webiny to go beyond your regular content management system
        </SubText>

        <ContentContainer>
          <Grid style={{paddingBottom: 20}}>
            <Cell>
              <h3>
                3rd Party Integrations
              </h3>
              <p>
                All mechanism like, upload, and displaying of image can be
                controlled, allowing you to integrated existing and proven 3rd party
                digital asset managers for upload and optimized delivery. Think of
                Akamai Image Manager, Cloudinary or Scene7.
              </p>
            </Cell>
            <Cell>
              <h3>
                Storage Adapters
              </h3>
              <p>
                By default Webiny comes with a local storage adapter, but this is
                nothing more than a plugin. You can easily create your own storage,
                and integrate with popular solutions like AWS S3, Google Cloud
                Storage, Azure Storage and others.
              </p>
            </Cell>
            <Cell>
              <h3>
                Built-in Image Editor
              </h3>
              <p>
                The build-in image editor allows you to do essential image
                manipulations, like image crop, rotate, flip. There are also more
                advance options, like drawing on top of images and the option to
                apply one of many predefined filters.
              </p>
            </Cell>
          </Grid>
        </ContentContainer>
      </CmsContainer>
    );
  }
}

export default Features;
