const {Asset} = require("parcel-bundler");

class MyAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'hoge';
  }
  parse(code) {
    console.log("parse");
    return "test hogehoge";
  }
  pretransform() {
    console.log("pretransform");
  }
  collectDependencies() {
//    console.log("collectDependencies");
//    this.addDependency("my-dep");
  }
  transform() {
    console.log("transform");
  }
  generate() {
    console.log("generate");
    return {
      hoge: 'this is test hogehoge',
//      foo: "my stuff here",
      js: `module.exports=${this.ast};`
    }
  }
}

module.exports = MyAsset;