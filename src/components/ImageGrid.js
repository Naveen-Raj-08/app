import React from "react";
import { useFirestore } from "../hooks/useFirestore";

export const ImageGrid = () => {
  const { Docs } = useFirestore("images");

  const listImages = Docs.map((doc) => {
    const { url, id } = doc;
    return (
      <div className="col-md-3 images" key={id}>
        <img src={url} alt="Images" />
      </div>
    );
  });
  return <div className="row">{listImages}</div>;
};
