import React from "react";
import "../scss/CollectionItem.scss"

export default function CollectionItem({ itemID, contract }) {
  const [uri, setURI] = React.useState("");

  React.useEffect(() => {
    contract.tokenURI(itemID).then((uri) => {
      fetch(uri.replace("ipfs://", "https://ipfs.io/ipfs/")).then((response) => {
        response.json().then((data) => {
          setURI(data.image.replace("ipfs://", "https://ipfs.io/ipfs/"));
        });
      })
    });
  }, []);
  return (
    <div className="collection_item">
      <p>{itemID}</p>
      <div className="img">
      <img src={uri} />
      </div>
    </div>
  );
}
