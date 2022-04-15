import React from "react";
import "../scss/CollectionItem.scss";
import LoadingIcons from "react-loading-icons";

export default function CollectionItem({ itemID, contract }) {
  const [uri, setURI] = React.useState("");
  const [loaded, setLoaded] = React.useState("");

  React.useEffect(() => {
    contract.tokenURI(itemID).then((uri) => {
      fetch(uri.replace("ipfs://", "https://ipfs.io/ipfs/")).then(
        (response) => {
          response.json().then((data) => {
            setURI(data.image.replace("ipfs://", "https://ipfs.io/ipfs/"));
            setLoaded(true);
          });
        }
      );
    });
  }, []);

  return (
    <div className="collection_item">
      <p>{itemID}</p>
      <div className="img">
        {loaded ? <img src={uri} /> : <LoadingIcons.Puff
          stroke="#49D3D5"
          speed={0.75}
          style={{
            position: "relative",
            fontSize: "4em",
          }}
        />}
      </div>
    </div>
  );
}
