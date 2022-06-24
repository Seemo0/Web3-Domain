const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory("Domains");
  // We pass in "programwithyt" to the constructor when deploying
  const domainContract = await domainContractFactory.deploy("semoDev");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

  // We're passing in a second variable - value. This is the moneyyyyyyyyyy
  let txn = await domainContract.register("Semo", {
    value: hre.ethers.utils.parseEther("0.1")
  });
  await txn.wait();

  const address = await domainContract.getAddress("Semo");
  console.log("Owner of domain semo:", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();