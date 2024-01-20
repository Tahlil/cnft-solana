import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { Metaplex, keypairIdentity, bundlrStorage, toMetaplexFile, toBigNumber } from "@metaplex-foundation/js";

import secret from './guideSecret.json';
const QUICKNODE_RPC = "https://api.devnet.solana.com";
const SOLAANA_CONNECTION = new Connection(QUICKNODE_RPC);
const WALLET = Keypair.fromSecretKey(new Uint8Array(secret));
const NFT_METADATA = 'https://mfp2m2qzszjbowdjl2vofmto5aq6rtlfilkcqdtx2nskls2gnnsa.arweave.net/YV-mahmWUhdYaV6q4rJu6CHozWVC1CgOd9NkpctGa2Q'; 
const COLLECTION_NFT_MINT = ''; 
const CANDY_MACHINE_ID = '';

const METAPLEX = Metaplex.make(SOLAANA_CONNECTION)
    .use(keypairIdentity(WALLET))
    .use(bundlrStorage({
        address: 'https://devnet.bundlr.network',
        providerUrl: QUICKNODE_RPC,
        timeout: 60000,
    }));
