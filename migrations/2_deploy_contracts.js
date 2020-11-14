const SM_Storage = artifacts.require("SM_Storage");

module.exports = function (deployer) {
  deployer.deploy(SM_Storage);
};
