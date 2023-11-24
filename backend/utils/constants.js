const OK = 200;
const CREATED = 201;
const VERIFICATION_URL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&/=]*)$/;
const VERIFICATION_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;
const secretKey = '164bf21b25c4e7d7942e6b14d504a3fc9d54fe9d62f83fdded7743ec52f23b0d';
module.exports = {
  OK,
  CREATED,
  VERIFICATION_URL,
  VERIFICATION_EMAIL,
  secretKey,
};
