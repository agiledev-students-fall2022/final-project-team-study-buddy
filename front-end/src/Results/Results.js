import React, { useEffect, useState } from "react";
import "./Results.css";
import Header from "./Header/header";
import Result from "./listComponent";

function Results() {
  const [printer, setPrinter] = useState(true);
  const [wifi, setWifi] = useState(true);
  const [study, setStudy] = useState(true);

  useEffect(() => {
    setPrinter(true);
    setWifi(true);
    setStudy(true);
  }, []);

  const resultShower = () => {
    let status = false;
    return testResults.map((result) => {
      status =
        (printer && result.printer) ||
        (wifi && result.wifi) ||
        (study && result.study);
      if (status) {
        return (
          <Result
            name={result.name}
            description={result.description}
            address={result.address}
            printer={result.printer}
            wifi={result.wifi}
            study={result.study}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div id="container">
      <Header
        printer={printer}
        wifi={wifi}
        study={study}
        setPrinter={() => setPrinter(!printer)}
        setWifi={() => setWifi(!wifi)}
        setStudy={() => setStudy(!study)}
      />
      <div id="result-shower">{resultShower()}</div>
    </div>
  );
}

export default Results;

const testResults = [
  {
    name: "El Barrista Cafe",
    address: "1121 ur mom blvd, New York, NY 10029",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore",
    printer: 1,
    wifi: 0,
    study: 1,
  },
  {
    name: "El Barrista Cafe",
    address: "1121 ur mom blvd, New York, NY 10029",
    description: "Lorem ipsum dolor ",
    printer: 0,
    wifi: 1,
    study: 0,
  },
  {
    name: "El Barrista Cafe",
    address: "1121 ur mom blvd, New York, NY 10029",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore",
    printer: 1,
    wifi: 1,
    study: 1,
  },
  {
    name: "El Barrista Cafe",
    address: "1121 ur mom blvd, New York, NY 10029",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore",
    printer: 1,
    wifi: 0,
    study: 1,
  },
  {
    name: "El Barrista Cafe",
    address: "1121 ur mom blvd, New York, NY 10029",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore",
    printer: 1,
    wifi: 1,
    study: 1,
  },
];
