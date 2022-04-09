import React from "react";
import { useParams } from "react-router-dom";
import "../scss/Collection.scss"
import { ethers } from "ethers";
import ABI from "../assets/NFTAbi.json";
import PhysicalNFT from "../components/PhysicalNFT";

const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/f8ccbba88cde4fbf8cfa8c82dc353e08");

export default function Collection() {
  const [collection, setCollection] = React.useState(null);
  const [valid, setValid] = React.useState(true);
  const [contract, setContract] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  let { slug } = useParams();

  async function getCollection() {
    // fetch("https://amanu.io:3000/collections/slug/" + slug).then(
    //   async (response) => {
    //     try {
    //       let json = await response.json();
    //       setCollection(json);
    //       setValid(true);
    //     } catch (e) {
    //       setValid(false);
    //     }
    //   }
    // );
    setCollection({
      id: 1,
      name: "Art Collection",
      creator: "Gianluca Minoprio",
      address: "0x70C398faA01C62725b23B02a85f0803D32161892",
      abi: "/abi/1.json",
      slug: "art-collection",
      creationDate: "2020-04-01T00:00:00.000Z",
      image: "https://images.fineartamerica.com/images-medium-large-5/fresh-paint-2-jane-davies.jpg",
      banner: "https://images.unsplash.com/photo-1624115406015-16eb7e7bc2a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    })
  }

  async function loadContract() {
    const contract = new ethers.Contract(collection.address, ABI.abi, provider);
    setContract(contract);
  }

  React.useEffect(() => {
    getCollection();
  }, []);

  React.useEffect(() => {
    if (collection) {
      loadContract();
    }
  }, [collection]);

  if (!valid) {
    return <div>This page doesn't exists</div>;
  }

  function trimAddress(addr) {
    let size = addr?.length;
    if (size > 20) {
      return addr.substring(0, 6) + "..." + addr.substring(size - 4);
    }
    return addr;
  }

  if (collection) {
    document.title = collection.name + " by " + collection.creator + " | Amanu";
  }

  return (
    <section className="collection">
      <div>
        <div className="info">
          <a className="top" href="">
            <div className="image">
              <img src={collection?.image} alt="" />
            </div>
            <div className="owner">
              <h1>{collection?.name}</h1>
              <h2>by {collection?.creator}</h2>
              <div className="address">
                <h5>#{collection?.id}</h5>
                <h5>{trimAddress(collection?.address)}</h5>
              </div>
            </div>
          </a>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, lectus in ultricies euismod, metus justo rutrum sem, vel sodales libero orci eu justo. Pellentesque nec ex justo. Ut semper commodo sem, ac viverra sem feugiat non. Quisque euismod lacinia neque a pharetra. Vestibulum pulvinar nulla porttitor efficitur tincidunt. Sed dapibus aliquam feugiat. Nulla posuere nec enim et auctor. Praesent sed mollis justo. Etiam ut diam lectus. Sed euismod, dui eget porta pulvinar, risus enim interdum magna, quis maximus urna tellus id dui. Cras urna justo, dictum nec congue eget, lobortis a tellus.
          </p>
        </div>
      </div>
      <div className="elements">
        {/* {collection && contract ? <PhysicalNFT contract={contract} tokenID={1} address={collection?.address}></PhysicalNFT> : null} */}
      </div>
    </section>
  );
}
