/*eslint-disable*/
module.exports = {
  components: 'src/components/**/*.tsx',
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
  ).parse,
};
