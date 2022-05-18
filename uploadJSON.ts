import * as fs from 'fs';
import Arweave from 'arweave';


(async () => {

    const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
        timeout: 20000,
        logging: false,
    });

    // Upload JSON to Arweave
    
   



    // provide arweave.net image url uploaded with uploadImageArweave.ts
var imageUrl = " PROVIDE AN IMAGE URL";
   

    let metadata = `{
        "image": "${imageUrl}",

             
        "attributes": [
            {
                "trait_type": "Metal",
                "value": "Rare"
            },
            {
                "trait_type": "Ancestry",
                "value": "Unknown"
            }
        ],
        "category": "image",
        "collection": {
            "family": "Fam",
            "name": "Org"
        },
        "description": "",
        "external_url": "example.com",
        "name": "NFT name",
        "properties": {
            "category": "image",
            "creators": [
                {
                    "address": "CREATOR WALLET ADDRESS",
                    "share": 100
                }
            ]
        },
        "seller_fee_basis_points": 500,
        "symbol": ""
    }`;
    
    

    metadata = metadata.trim();

    console.log(metadata);
    const metadataRequest = JSON.parse(JSON.stringify(metadata));
    
    const metadataTransaction = await arweave.createTransaction({
        data: metadataRequest
    });
    
    metadataTransaction.addTag('Content-Type', 'application/json');
    
        //SETUP YOUR ARWEAVE WALLET

    await arweave.transactions.sign(metadataTransaction, "YOUR ARWEAVE WALLET WITHOUT ext_true");
    
    console.log("https://arweave.net/"+metadataTransaction.id);

    let response = await arweave.transactions.post(metadataTransaction);
    console.log(response);
})();