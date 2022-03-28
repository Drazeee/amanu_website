import React from "react";
import { ethers } from "ethers";
import { abi } from "./abi";

export default function Mint() {
  const [provider, setProvider] = React.useState(null);
  const [signer, setSigner] = React.useState(null);

  React.useEffect(async () => {
    const newProvider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );
    if (newProvider == null || signer == null) {
      await newProvider.send("eth_requestAccounts", []);
      const signer = newProvider.getSigner();
      setSigner(signer);
    }
    setProvider(newProvider);
  }, []);

  const mint = async () => {
    try {
      const ethereum = window;
      console.log("Ethereum");
      if (ethereum) {
        if (provider == null || signer == null) {
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          setWallet(await signer.getAddress());
          setSigner(signer);
        }

        console.log("before contract");
        const nftContract = new ethers.Contract(
          "0xE57a51979781f12162404D27DE0F0A29Fe3c91f5",
          abi,
          signer
        );

        console.log("Initialize payment");

        let nftTxn = await nftContract.mintBook(1, {
          value: ethers.utils.parseEther("0.00001"),
        });

        console.log("Minting... please wait");
        await nftTxn.wait().then(() => {
          console.log("Minted!");
        });
      } else {
        console.log("No ethereum object detected");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return <button onClick={mint}>Mint</button>;
}
