const qs = require('querystring')
const aws = require('aws-sdk')

const ses = new aws.SES({
  accessKeyId: 'AKIAIRWHLABZ6QTXYMNA',
  secretAccesskey: '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',
  region: 'us-east-1',
})

// Lambda Handler
module.exports.handler = function(event, context, callback) {
  // Parse the post body
  const data = qs.parse(event.body)

  // Access variables from body
  const email = data.email
  const name = data.name
  const message = data.message

  // check all fields are defined
  if (email == undefined || name == undefined || message == undefined) {
    // send response
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ status: false, msg: 'All fields are required.' }),
      isBase64Encoded: false,
      headers: {},
    })
  }

  // email regex
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!re.test(String(email).toLowerCase())) {
    // send response
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ status: false, msg: 'Invalid email format.' }),
      isBase64Encoded: false,
      headers: {},
    })
  }

  // send the email
  var params = {
    Destination: {
      ToAddresses: ['sven@webiny.com'],
    },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Data: message,
        },
      },
      Subject: {
        Data: name + ' - via Webiny Contact Form',
      },
    },
    Source: 'info@webiny.com',
  }

  ses.sendEmail(params, (err, data) => {
    if (!err) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ status: true, msg: 'Thanks' }),
        isBase64Encoded: false,
        headers: {},
      })
    } else {
      callback(null, {
        statusCode: 503,
        body: JSON.stringify({
          status: false,
          msg: JSON.stringify(err),
        }),
        isBase64Encoded: false,
        headers: {},
      })
    }
  })
}
