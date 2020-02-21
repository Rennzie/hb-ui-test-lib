// eslint-disable-next-line
const path = require('path');

module.exports = {
  components: 'src/components/**/*.tsx',
  // eslint-disable-next-line
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
  ).parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, '/src/components/Theme/ThemeProvider'),
  },
  // require: ['babel-polyfill', path.join(__dirname, '**/*.css')],
};
