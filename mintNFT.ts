import {actions, utils, programs, NodeWallet} from '@metaplex/js';
import {Connection, Keypair, clusterApiUrl} from '@solana/web3.js';
import * as bs58 from "bs58";

async function mintNFT()  {
  //PROVIDE YOUR JSON URI WITH THE URL OF THE JSON UPLADAED TO ARWEAVE uploadJSON.ts
let uriS = "";
 console.log("minting")
    let connection = new Connection(clusterApiUrl("mainnet-beta"));

    //let secretKey: Uint8Array= Uint8Array.from([]);
    let keypair: Keypair = Keypair.fromSecretKey(bs58.decode("YOUR SOLANA WALLET PRIVATE KEY"));
    const mintNFTResponse = await actions.mintNFT({
        connection,
        wallet: new NodeWallet(keypair),
        uri: uriS,
        maxSupply: 1
      });

}

mintNFT();