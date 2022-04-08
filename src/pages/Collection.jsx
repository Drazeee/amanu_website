import React from "react";
import { useParams } from "react-router-dom";
import "../scss/Collection.scss"

export default function Collection() {
  const [collection, setCollection] = React.useState(null);
  const [valid, setValid] = React.useState(true);
  const [loaded, setLoaded] = React.useState(false);
  let { slug } = useParams();

  async function getCollection() {
    fetch("https://amanu.io:3000/collections/slug/" + slug).then(
      async (response) => {
        try {
          let json = await response.json();
          setCollection(json);
          setValid(true);
        } catch (e) {
          setValid(false);
        }
      }
    );
  }

  React.useEffect(() => {
    getCollection();
  }, []);

  if (!valid) {
    return <div>This page doesn't exists</div>;
  }

  return (
    <section className="collection">
      <div className="info">
        Collection {slug}
        <ul>
          <li>id: {collection?.id}</li>
          <li>name: {collection?.name}</li>
          <li>creator: {collection?.creator}</li>
          <li>address: {collection?.address}</li>
          <li>abi: {collection?.abi}</li>
        </ul>
      </div>
      <div className="elements"></div>
    </section>
  );
}
