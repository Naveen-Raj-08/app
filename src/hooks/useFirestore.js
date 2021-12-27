import React, { useEffect, useState } from "react";
import { appStore } from "../firebase/config";

export const useFirestore = (collection) => {
  const [Docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = appStore
      .collection("images")
      .orderBy("createdAt", "desc")
      .onSnapshot((sanp) => {
        let documents = [];

        sanp.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { Docs };
};
