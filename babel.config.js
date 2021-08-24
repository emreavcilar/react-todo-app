module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    'es2015',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      { loose: true },
    ],
  ],
};
