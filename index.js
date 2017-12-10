module.exports = (bundler) => {
  bundler.addAssetType('ext', require.resolve("./MyAsset"));
  bundler.addPackager('hoge', require.resolve("./MyPackager"));
};
