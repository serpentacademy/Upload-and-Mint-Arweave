import * as fs from 'fs';
import Arweave from 'arweave';


async function uploadImageToArweave (){
console.log("init");
    const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
        timeout: 20000,
        logging: false,
    });

    // Upload image to Arweave
    const data = fs.readFileSync('./image.png');
    
    const transaction = await arweave.createTransaction({
        data: data
    });

    
    transaction.addTag('Content-Type', 'image/png');

    //SETUP YOUR ARWEAVE WALLET
    await arweave.transactions.sign(transaction, "YOUR ARWEAVE WALLET JSON without ext:true");
    

    const response = await arweave.transactions.post(transaction);
    
    console.log(response);

    const imageUrl = transaction.id ? `https://arweave.net/${transaction.id}` : undefined;

    console.log(imageUrl);
}

uploadImageToArweave();