import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export const UploadForm = () => {
  const [File, setFile] = useState(null);
  const [Error, setError] = useState(false);

  const handleFile = (e) => {
    let selectedFiles = e.target.files[0];
    let types = ["image/png", "image/jpeg"];

    if (selectedFiles && types.includes(selectedFiles.type)) {
      setFile(selectedFiles);
      setError(false);
    } else {
      setFile(null);
      setError(true);
    }
  };

  return (
    <div className="card file-upload-form">
      {Error && (
        <p className="error-msg">
          Please check the file type we are accepting only (PNG / JPEG)
        </p>
      )}
      {File && <ProgressBar file={File} setfile={setFile} />}
      <form>
        <fieldset>
          <input type="file" onChange={handleFile} />
        </fieldset>
      </form>
    </div>
  );
};
