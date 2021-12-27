import React, { cloneElement, useEffect, useState } from "react";
import { appStorage, appStore, timestamp } from "../firebase/config";

export const useStorage = (file) => {
  const [Progress, setProgress] = useState(0);
  const [Error, setError] = useState(null);
  const [Url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = appStorage.ref(file.name);
    const collectionRef = appStore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percent);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return {
    Progress,
    Url,
    Error,
  };
};
