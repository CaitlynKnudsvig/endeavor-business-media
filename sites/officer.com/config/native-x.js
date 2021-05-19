const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5b55eae504bce800019807fd' },
  ])
  .setAliasPlacements('tactical', [
    { name: 'default', id: '5b57589407cd7000019c5fbb' },
  ])
  .setAliasPlacements('training-careers', [
    { name: 'default', id: '5b5758a35bbf91000134a2c4' },
  ])
  .setAliasPlacements('on-the-street', [
    { name: 'default', id: '5b5758b107cd7000019c5fbd' },
  ])
  .setAliasPlacements('investigations', [
    { name: 'default', id: '5b5758bf5bbf91000134a2c5' },
  ])
  .setAliasPlacements('command-hq', [
    { name: 'default', id: '5b5758cf07cd7000019c5fbf' },
  ])
  .setAliasPlacements('home', [
    { name: 'sponsored', id: '60a547de46b8da0001e1280c' },
  ]);

module.exports = config;
