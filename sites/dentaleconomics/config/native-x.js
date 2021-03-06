const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb192639937800010cfcca' },
    { name: 'list2', id: '5cdb192639937800010cfcca' },
    { name: 'list1', id: '5cdb192639937800010cfcca' },
  ])
  .setAliasPlacements('practice', [
    { name: 'card', id: '5cdb1959f41dfb0001fb3e06' },
    { name: 'list2', id: '5cdb1959f41dfb0001fb3e06' },
    { name: 'list1', id: '5cdb1959f41dfb0001fb3e06' },
  ])
  .setAliasPlacements('macro-op-ed', [
    { name: 'card', id: '5cdb193c39937800010d00d9' },
    { name: 'list2', id: '5cdb193c39937800010d00d9' },
    { name: 'list1', id: '5cdb193c39937800010d00d9' },
  ])
  .setAliasPlacements('science-tech', [
    { name: 'card', id: '5cdb1974f41dfb0001fb42de' },
    { name: 'list2', id: '5cdb1974f41dfb0001fb42de' },
    { name: 'list1', id: '5cdb1974f41dfb0001fb42de' },
  ])
  .setAliasPlacements('money', [
    { name: 'card', id: '5cdb198c39937800010d0f7b' },
    { name: 'list2', id: '5cdb198c39937800010d0f7b' },
    { name: 'list1', id: '5cdb198c39937800010d0f7b' },
  ])
  .setAliasPlacements('dental-office-design', [
    { name: 'card', id: '5cdb19aaf41dfb0001fb4d52' },
    { name: 'list2', id: '5cdb19aaf41dfb0001fb4d52' },
    { name: 'list1', id: '5cdb19aaf41dfb0001fb4d52' },
  ]);

module.exports = config;
