
// artifacts.require: マイグレーション対象のcontractの指定
var Adoption = artifacts.require("Adoption");

module.exports = function(deployer) {
  deployer.deploy(Adoption);
};
