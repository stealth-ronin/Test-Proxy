const got = require('got');

exports.handler = async (data) => {
    const { url, options } = data;
    const { body } = await got(url, options);

    return body;
};