module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/screens': './src/screens',
          '~/components': './src/components',
          '~/routes': './src/routes',
          '~/services': './src/services',
          '~/navigation': './src/navigation',
          '~/hooks': './src/hooks',
          '~/store': './src/store',
          '~/utils': './src/utils',
        },
      },
    ],
  ],
};
