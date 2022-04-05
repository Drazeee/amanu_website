import React from "react";
import LoadingIcons from "react-loading-icons";
import Popup from "reactjs-popup";

import "../scss/PhysicalNFT.scss";
import "reactjs-popup/dist/index.css";

import pots from "../assets/about/pots.png";

export default function PhysicalNFT({
  claimed,
  address,
  tokenID,
  contract,
  onRedeem,
}) {
  function trimAddress(addr) {
    let size = addr.length;
    if (size > 20) {
      return addr.substring(0, 10) + "..." + addr.substring(size - 8);
    }
    return addr;
  }

  const [contractAddr, setContractAddr] = React.useState("");
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    setContractAddr(trimAddress(address));
    setName("My Artwork #" + tokenID);
  }, []);

  const [loaded, setLoaded] = React.useState(false);
  const [isPhysicalAvailable, setIsPhysicalAvailable] = React.useState(claimed);

  const getPhysicalStatus = async () => {
    const result = await contract.isPhysicalAvailable(tokenID);
    setIsPhysicalAvailable(result);
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenID);
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        setUri(data.image.replace("ipfs://", "https://ipfs.io/ipfs/"));
      });
  }

  const [uri, setUri] = React.useState("");

  const [contractName, setContractName] = React.useState("");
  const [contractSymbol, setContractSymbol] = React.useState("");

  React.useEffect(async () => {
    await getURI();
    await getPhysicalStatus();
    setContractName(await contract.name());
    setContractSymbol(await contract.symbol());
    setLoaded(true);
  }, []);

  async function getPhysicalAsset(obj) {
    setLoaded(false);
    var err = false;
    await contract.receivePhysicalAsset(tokenID, JSON.stringify(obj)).then(
      async (result) => {
        await result.wait();
      },
      (error) => {
        console.log(error.reason);
        err = true;
      }
    );
    if (!err) {
      onRedeem(tokenID);
    }
    await getURI();
    await getPhysicalStatus();
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getPhysicalAsset({
      name: "test",
      surname: "test",
      email: "test@a.c",
      address: "test",
    });
  }

  return (
    <div className="physical_nft">
      <div
        className={
          !isPhysicalAvailable ? "main noselect claimed" : "main noselect"
        }
      >
        {loaded ? (
          <img src={uri} alt="" />
        ) : (
          <LoadingIcons.Puff
            stroke="#49D3D5"
            speed={0.75}
            style={{
              position: "relative",
              fontSize: "4em",
            }}
          />
        )}
      </div>
      <div className="content">
        <div>
          <h2>{name}</h2>
          <p>{contractAddr}</p>
        </div>
        <div className="collection">
          <img
            src="https://images.fineartamerica.com/images-medium-large-5/fresh-paint-2-jane-davies.jpg"
            alt=""
          />
          <p>{contractName + " (" + contractSymbol + ")"}</p>
        </div>
        {isPhysicalAvailable ? (
          <Popup
            trigger={
              <button
                className={
                  !isPhysicalAvailable ? "noselec claimed" : "noselect"
                }
              >
                <p>{!isPhysicalAvailable ? "Sell" : "Claim Now"}</p>
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header">Claim {name}</div>
                <form className="content" onSubmit={handleSubmit}>
                  <div>
                    <p>Email</p>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <p>Shipping address</p>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      name="contry"
                      id="contry"
                      placeholder="Country"
                    />
                    <input
                      type="text"
                      name="address_line_1"
                      id="address_line_1"
                      placeholder="Address line 1"
                    />
                    <input
                      type="text"
                      name="address_line_2"
                      id="address_line_2"
                      placeholder="Address line 2"
                    />
                    <div className="split">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="City"
                      />
                      <input
                        type="text"
                        name="zip"
                        id="zip"
                        placeholder="ZIP"
                      />
                    </div>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State"
                    />
                  </div>

                  <button className="button" type="submit">
                    Claim!
                  </button>
                </form>
              </div>
            )}
          </Popup>
        ) : (
          <button className="noselec claimed">
            <p>Sell</p>
          </button>
        )}
      </div>
    </div>
  );
}
