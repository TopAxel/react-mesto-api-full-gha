const allowedCors = [
  'https://artempopov.nomoredomainsrocks.ru',
  'https://api.artempopov.nomoredomainsrocks.ru',
  'http://artempopov.nomoredomainsrocks.ru',
  'http://api.artempopov.nomoredomainsrocks.ru',
  'http://localhost:3000',
];
const cors = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);

    return res.end();
  }

  return next();
};

module.exports = { cors };
