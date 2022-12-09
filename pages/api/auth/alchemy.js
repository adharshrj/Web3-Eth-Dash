import { Alchemy, Network } from "alchemy-sdk";

const alchemyApi = async (req, res) => {
  const { walletAddress, ensContractAddress, alchemyApiKey } = req.body;
  try {
    const config = {
        apiKey: alchemyApiKey,
        network: Network.ETH_MAINNET,
      };
      const alchemy = new Alchemy(config);
      const nfts = await alchemy.nft.getNftsForOwner(walletAddress, {
        contractAddresses: [ensContractAddress],
      });
      console.log("nfts", nfts);
      res.status(200).json({nfts})
  }catch (error) {
      res.status(400).json({error: error.message})
  }
}
export default alchemyApi

