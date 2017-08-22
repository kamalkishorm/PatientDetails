var PatientInfo = artifacts.require("./PatientInfo.sol");
module.exports = function(deployer) {
  deployer.deploy(PatientInfo);
};
