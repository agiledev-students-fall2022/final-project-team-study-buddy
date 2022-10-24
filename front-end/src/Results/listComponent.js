import React, { useEffect, useState } from "react";

import "./listComponent.css";

function ListComponent(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [printer, setPrinter] = useState(0);
  const [wifi, setWifi] = useState(0);
  const [study, setStudy] = useState(0);

  useEffect(() => {
    console.log(props);
    console.log("fwerfew");
    setName(props.name);
    setDescription(props.description);
    setAddress(props.address);
    setPrinter(props.printer);
    setWifi(props.wifi);
    setStudy(props.study);
  }, []);

  return (
    <div id="Result">
      <h1>temp</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default ListComponent;
