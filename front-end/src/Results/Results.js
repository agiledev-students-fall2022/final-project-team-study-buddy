import React from "react";
import "./Results.css";
import Header from "./Header/header";
import Result from "./listComponent";

function Results() {
  const resultShower = () => {
    console.log(testResults);
    return testResults.map((result) => {
      <Result
        name={result.name}
        address={result.address}
        description={result.description}
        printer={result.printer}
        wifi={result.wifi}
        study={result.study}
      />;
    });
  };

  return (
    <div>
      <Header />
      {resultShower()}
      {testResults.map((result) => {
        return (
          <Result
            name={result.name}
            address={result.address}
            description={result.description}
            printer={result.printer}
            wifi={result.wifi}
            study={result.study}
          />
        );
      })}
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore dolore",
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
