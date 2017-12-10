const {Packager} = require('parcel-bundler');

class MyPackager extends Packager {
  async start() {
    console.log("start");
    await this.dest.write(header);
  }
  async addAsset() {
    console.log("addAsset");
    await this.dest.write(asset.generated.foo);
  }
  async end() {
    console.log("end");
    await this.dest.end(trailer);
  }
}

module.exports = MyPackager;