import React from "react";
import Header from "../components/Header";
import { Emoji } from "react-apple-emojis";
import PhysicalNFT from "../components/PhysicalNFT";
import Footer from "../components/Footer";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../scss/Redeem.scss";

const contractAddress = [
  {
    address: "0x70C398faA01C62725b23B02a85f0803D32161892",
    abi: "https://amanu.io/abi/AMANU.json",
  },
];
const CHAIN_ID = 4;
const CHAIN_NAME = "Rinkeby";
const CHAIN_INFO = {
  chainId: "0x4",
  rpcUrls: ["https://rinkeby.infura.io/v3/"],
  chainName: "Rinkeby Test Network",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://rinkeby.etherscan.io"],
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default function Redeem() {
  const [nfts, setNFTS] = React.useState([]);
  const [nftsToClaim, setNFTSToClaim] = React.useState([]);
  const [chainId, setChainId] = React.useState(0);

  const [signer, setSigner] = React.useState(null);
  const [contracts, setContracts] = React.useState([]);
  const [address, setAddress] = React.useState("...");

  const [offset, setOffset] = React.useState(0);

  const totalNFTS = async () => {
    console.log("totalNFTS");
    console.log("contracts", contracts);
    const addr = await signer?.getAddress();
    var nfts = [];
    var nftsToClaim = [];
    console.log(contractIndex, contracts.length);
    for (var contractIndex = 0; contractIndex < contracts.length; contractIndex++) {
      console.log("je suis sur aue je suis dans le for");
      var contract = contracts[contractIndex];
      var _nfts = await contract?.getTokenIdFromOwner(addr);
      var count = await contract?.balanceOf(addr);
      var res = [];
      var unclaimed = [];
      for (var j = 0; j < count; j++) {
        var nb = parseInt(_nfts[j]._hex);
        if (await contract?.isPhysicalAvailable(nb)) {
          unclaimed.push(nb);
        } else {
          res.push(nb);
        }
      }
      for (var j = 0; j < res.length; j++) {
        nfts.push({ id: res[j], contract: contract });
      }
      for (var j = 0; j < unclaimed.length; j++) {
        nftsToClaim.push({ id: unclaimed[j], contract: contract });
      }
      setNFTS(nfts);
      console.log(nfts);
      console.log("nfts", nfts);
      setNFTSToClaim(nftsToClaim);
      console.log("nftsToClaim", nftsToClaim);
    }
  };

  function onRedeem() {
    setOffset(offset + 1);
  }

  function trimAddress(addr) {
    let size = addr?.length;
    if (size > 20) {
      return addr.substring(0, 6) + "..." + addr.substring(size - 4);
    }
    return addr;
  }

  const [collections, setCollections] = React.useState([]);

  async function loadCollections() {
    fetch("https://amanu.io:3000/collections").then(async (response) => {
      var collections = await response.json();
      setCollections(collections);
    });
  }

  async function initWallet() {
    try {
      window.ethereum.request({ method: "eth_requestAccounts" });
      if (window.ethereum) {
        window.ethereum.on("chainChanged", async () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", async () => {
          window.location.reload();
        });
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      setSigner(signer);
      var contracts = [];
      for (
        var contractIndex = 0;
        contractIndex < collections.length;
        contractIndex++
      ) {
        var addr = await collections[contractIndex]?.address;
        fetch(
          "https://amanu.io:3000/abi/" + collections[contractIndex]?.id
        ).then(async (response) => {
          var res = await response.json();
          const contract = new ethers.Contract(addr, res.abi, signer);
          contracts.push(contract);
        });
      }
      setContracts(contracts);
      await sleep(1000);
      setChainId(await (await provider.getNetwork()).chainId);
      setAddress(await signer.getAddress());
    } catch (e) {
      toast("⚠️ Error while loading your wallet", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  React.useEffect(() => {
    console.log("collections", collections);
    initWallet();
  }, [collections]);

  React.useEffect(() => {
    loadCollections();
  }, []);

  const [loaded, setLoaded] = React.useState(false);

  async function initNFTs() {
    setLoaded(false);
    if (chainId != CHAIN_ID) {
      if (chainId > 0) {
        toast("⚠️ Wrong network (use " + CHAIN_NAME + ")", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        try {
          await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x' + CHAIN_ID }],
          });
        } catch(err) {
          window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              CHAIN_INFO,
            ],
          });
        }
      }
      return;
    }
    setNFTS([]);
    setNFTSToClaim([]);
    await totalNFTS();
    setLoaded(true);
  }

  React.useEffect(() => {
    initNFTs();
  }, [contracts, chainId]);

  return (
    <>
      <Header back={true} />
      <div className="safearea redeem">
        <h1>
          Hey, <small>{trimAddress(address)}</small>{" "}
          <Emoji name="waving-hand" />
        </h1>
        <h3>
          You can claim & redeem{" "}
          <span className="color">
            {loaded ? nftsToClaim?.length - offset : "..."}
          </span>{" "}
          physical asset{nftsToClaim?.length - offset > 1 ? "s" : ""}!
        </h3>
        <div>
          {nftsToClaim?.map((obj, i) => {
            return (
              <PhysicalNFT
                claimed={false}
                address={obj.contract.address}
                tokenID={obj.id}
                contract={obj.contract}
                key={i}
                onRedeem={onRedeem}
              />
            );
          })}
        </div>
        <h3>
          You have claimed{" "}
          <span className="color">
            {loaded ? nfts?.length + offset : "..."}
          </span>{" "}
          physical asset
          {nfts?.length + offset > 1 ? "s" : ""}!
        </h3>
        <div>
          {nfts?.map((obj, i) => {
            return (
              <PhysicalNFT
                claimed={true}
                address={obj.contract.address}
                tokenID={obj.id}
                contract={obj.contract}
                key={i}
                onRedeem={onRedeem}
              />
            );
          })}
        </div>
      </div>
      <Footer home={false} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
