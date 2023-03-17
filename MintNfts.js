// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, image, rarity) {
  const nft = {
    name,
    description,
    image,
    rarity,
  };
  nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    const nft = nfts[i];
    console.log(
      `Name: ${nft.name}\nDescription: ${nft.description}\nImage: ${nft.image}\n`
    );
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nfts.length;
}

// call your functions below this line
mintNFT(
  "CryptoKitty",
  "A cute digital cat",
  "https://cryptokitties.co/image.png",
  "OG Legenday"
);
mintNFT(
  "CryptoPunk",
  "A punky digital character",
  "https://cryptopunks.co/image.png",
  "Legenday"
);

listNFTs();

console.log(`Total NFTs minted: ${getTotalSupply()}`);
