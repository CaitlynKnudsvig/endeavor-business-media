const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb1d3139937800010dba60' },
    { name: 'list2', id: '5cdb1d3139937800010dba60' },
    { name: 'list1', id: '5cdb1d3139937800010dba60' },
  ])
  .setAliasPlacements('cutting', [
    { name: 'card', id: '5cdb1d4939937800010dbe69' },
    { name: 'list2', id: '5cdb1d4939937800010dbe69' },
    { name: 'list1', id: '5cdb1d4939937800010dbe69' },
  ])
  .setAliasPlacements('welding', [
    { name: 'card', id: '5cdb1d5f39937800010dc25c' },
    { name: 'list2', id: '5cdb1d5f39937800010dc25c' },
    { name: 'list1', id: '5cdb1d5f39937800010dc25c' },
  ])
  .setAliasPlacements('micromachining', [
    { name: 'card', id: '5cdb1d7539937800010dc661' },
    { name: 'list2', id: '5cdb1d7539937800010dc661' },
    { name: 'list1', id: '5cdb1d7539937800010dc661' },
  ])
  .setAliasPlacements('marking-engraving', [
    { name: 'card', id: '5cdb1d8ef41dfb0001fc07fe' },
    { name: 'list2', id: '5cdb1d8ef41dfb0001fc07fe' },
    { name: 'list1', id: '5cdb1d8ef41dfb0001fc07fe' },
  ])
  .setAliasPlacements('surface-treatment', [
    { name: 'card', id: '5cdb1da539937800010dcf55' },
    { name: 'list2', id: '5cdb1da539937800010dcf55' },
    { name: 'list1', id: '5cdb1da539937800010dcf55' },
  ])
  .setAliasPlacements('additive-manufacturing', [
    { name: 'card', id: '5cdb1dc2f41dfb0001fc112f' },
    { name: 'list2', id: '5cdb1dc2f41dfb0001fc112f' },
    { name: 'list1', id: '5cdb1dc2f41dfb0001fc112f' },
  ])
  .setAliasPlacements('drilling', [
    { name: 'card', id: '5cdb1e71f41dfb0001fc2e73' },
    { name: 'list2', id: '5cdb1e71f41dfb0001fc2e73' },
    { name: 'list1', id: '5cdb1e71f41dfb0001fc2e73' },
  ]);

module.exports = config;
