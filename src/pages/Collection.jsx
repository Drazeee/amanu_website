import React from "react";
import { useParams } from "react-router-dom";
import "../scss/Collection.scss";
import { ethers } from "ethers";
import ABI from "../assets/NFTAbi.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CollectionItem from "../components/CollectionItem";

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
};

const provider = new ethers.providers.Web3Provider(window.ethereum);

export default function Collection() {
  const [collection, setCollection] = React.useState(null);
  const [contract, setContract] = React.useState(null);
  const [elements, setElements] = React.useState([]);
  let { slug } = useParams();

  async function getCollection() {
    try {
      fetch("https://amanu.io:3000/collections/slug/" + slug).then(
        async (response) => {
          try {
            let json = await response.json();
            setCollection(json);
          } catch (e) {
            setCollection(null);
          }
        }
      );
    } catch (e) {
      setCollection(null);
    }
    // setCollection({
    //   id: 1,
    //   name: "Art Collection",
    //   creator: "Gianluca Minoprio",
    //   address: "0x70C398faA01C62725b23B02a85f0803D32161892",
    //   abi: "/abi/1.json",
    //   slug: "art-collection",
    //   creationDate: "2020-04-01T00:00:00.000Z",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, lectus in ultricies euismod, metus justo rutrum sem, vel sodales libero orci eu justo. Pellentesque nec ex justo. Ut semper commodo sem, ac viverra sem feugiat non. Quisque euismod lacinia neque a pharetra. Vestibulum pulvinar nulla porttitor efficitur tincidunt. Sed dapibus aliquam feugiat. Nulla posuere nec enim et auctor. Praesent sed mollis justo. Etiam ut diam lectus. Sed euismod, dui eget porta pulvinar, risus enim interdum magna, quis maximus urna tellus id dui. Cras urna justo, dictum nec congue eget, lobortis a tellus.",
    //   image:
    //     "https://images.fineartamerica.com/images-medium-large-5/fresh-paint-2-jane-davies.jpg",
    //   banner:
    //     "https://images.unsplash.com/photo-1624115406015-16eb7e7bc2a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    // });
  }

  async function loadContract() {
    const contract = new ethers.Contract(collection.address, ABI.abi, provider);
    setContract(contract);
  }

  React.useEffect(() => {
    if (collection) {
      loadContract();
      document.title =
        collection.name + " by " + collection.creator + " | Amanu";
    } else {
      getCollection();
    }
  }, [collection]);

  function trimAddress(addr) {
    let size = addr?.length;
    if (size > 20) {
      return addr.substring(0, 6) + "..." + addr.substring(size - 4);
    }
    return addr;
  }

  const mintCollection = async () => {
    window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    var addr = await collection.address;
    const contract = new ethers.Contract(addr, ABI.abi, signer);
    try {
      const tx = await contract.payToMint(1, {
        value: ethers.utils.parseEther("0.005"),
      });
      await tx.wait();
      toast.success("Collection minted successfully!");
      setElements([...elements, elements.length]);
    } catch (e) {
      toast.error("Error minting collection!");
    }
  };

  const getMintedElements = async () => {
    const count = await contract.count();
    const elements = [];
    for (let indexElements = 0; indexElements < count; indexElements++) {
      elements.push(indexElements);
    }
    setElements(elements);
  };

  React.useEffect(() => {
    if (contract) {
      getMintedElements();
    }
  }, [contract]);

  const [verif, setVerif] = React.useState(false);

  async function verifChainId() {
    const chaindId = await (await provider.getNetwork()).chainId;

    if (chaindId != CHAIN_ID) {
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
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x" + CHAIN_ID }],
        });
      } catch (err) {
        window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [CHAIN_INFO],
        });
      }
    }
  }

  React.useEffect(() => {
    if (!verif) {
      verifChainId();
      if (window.ethereum) {
        window.ethereum.on("chainChanged", async () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", async () => {
          window.location.reload();
        });
      }
      setVerif(true);
    }
  }, [verif]);

  if (collection == null) {
    return <div>Collection not found</div>;
  }

  return (
    <section className="collection">
      <div>
        <div className="info">
          <a
            className="top"
            href={
              CHAIN_INFO.blockExplorerUrls[0] + "/address/" + collection.address
            }
            target="_blank"
          >
            <div className="image">
              <img src={collection.image} alt="" />
            </div>
            <div className="owner">
              <h1>{collection.name}</h1>
              <h2>by {collection.creator}</h2>
              <div className="address">
                <h5>#{collection.id}</h5>
                <h5>{trimAddress(collection.address)}</h5>
              </div>
            </div>
          </a>
          <p className="content">{collection.desc}</p>
        </div>
        <button className="mint" onClick={mintCollection}>
          Mint an item !
        </button>
      </div>
      <div className="elements">
        {elements.map((element, index) => {
          return (
            <CollectionItem key={index} itemID={element} contract={contract} />
          );
        })}
      </div>
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
    </section>
  );
}
