const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;
  
  const ShubhCollectiblesContract = await ethers.getContractFactory("ShubhX");

  // deploy the contract
  const deployedShubhCollectiblesContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // Wait for it to finish deploying
  await deployedShubhCollectiblesContract.deployed();

  // print the address of the deployed contract
  console.log(
    "ShubhX Contract Address:",
    deployedShubhCollectiblesContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });