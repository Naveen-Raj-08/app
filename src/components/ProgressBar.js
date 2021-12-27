import React, { useEffect } from "react";
import { useStorage } from "../hooks/useStorage";

export const ProgressBar = ({ file, setfile }) => {
  console.log();

  const { Url, Progress } = useStorage(file);
  console.log(Progress, Url);

  useEffect(() => {
    if (Url) {
      setfile(null);
    }
  }, [Url, setfile]);
  return <div className="progress-bar" style={{ width: Progress + "%" }}></div>;
};
