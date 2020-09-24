const request = require("request");
const qs = require("querystring");

// Lambda Handler
module.exports.handler = function(event, context, callback) {
    const SUBSCRIBERS_LIST_ID = "gVp3rBCx9E6GZtVznTEmwg";
    const ENDPOINT = "https://mailer.webiny.com/subscribe";

    // Parse the post body
    const data = qs.parse(event.body);

    // Access variables from body
    const email = data.email;

    // email regex
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
        // send response
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({ status: false, msg: "Invalid email format." }),
            isBase64Encoded: false,
            headers: {},
        });
    } else {
        request.post(
            ENDPOINT,
            { form: { list: SUBSCRIBERS_LIST_ID, email: email, boolean: true } },
            (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    // send response
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify({ status: true, msg: "Subscribed." }),
                        isBase64Encoded: false,
                        headers: {},
                    });
                } else {
                    // send response
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify({
                            status: false,
                            msg: "Oops...a strange error occurred, we are looking into it.",
                        }),
                        isBase64Encoded: false,
                        headers: {},
                    });
                }
            },
        );
    }
};
