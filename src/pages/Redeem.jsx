import React from "react";
import Header from "../components/Header";
import { Emoji } from "react-apple-emojis";
import PhysicalNFT from "../components/PhysicalNFT";
import Footer from "../components/Footer";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../scss/Redeem.scss";

import ABI from "../assets/NFTAbi.json";

const contractAddress = ["0x70C398faA01C62725b23B02a85f0803D32161892"];
const CHAIN_ID = 4;
const CHAIN_NAME = "Rinkeby";

export default function Redeem() {
  const [nfts, setNFTS] = React.useState([]);
  const [nftsToClaim, setNFTSToClaim] = React.useState([]);
  const [chainId, setChainId] = React.useState(0);

  const [signer, setSigner] = React.useState(null);
  const [contracts, setContracts] = React.useState([]);
  const [address, setAddress] = React.useState("...");

  const [offset, setOffset] = React.useState(0);

  const totalNFTS = async (own) => {
    if (!own) {
      const addr = await signer?.getAddress();
      var nfts = [];
      var nftsToClaim = [];
      for (var i = 0; i < contracts.length; i++) {
        var contract = contracts[i];
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
        setNFTSToClaim(nftsToClaim);
      }
    } else {
      const count = await contract?.count();
      setNFTSAmount(count);
      var res = [];
      for (var i = 0; i < count; i++) {
        res.push(parseInt(i));
      }
      setNFTS(res);
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

  React.useEffect(async () => {
    try {
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
      for (var i = 0; i < contractAddress.length; i++) {
        const contract = new ethers.Contract(
          contractAddress[i],
          ABI.abi,
          signer
        );
        contracts.push(contract);
      }
      setContracts(contracts);
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
  }, []);

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(async () => {
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
      }
      return;
    }
    setNFTS([]);
    setNFTSToClaim([]);
    await totalNFTS(false);
    setLoaded(true);
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
