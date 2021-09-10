module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      modules: false,
      corejs: '3.17.2',
    }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-export-default-from',
  ],
};
