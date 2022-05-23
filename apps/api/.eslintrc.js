module.exports = {
  ...require('@bupu/config/eslint-nest'),
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  root: true,
};
