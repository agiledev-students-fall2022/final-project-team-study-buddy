import React from "react";
import "./Results.css";
import Header from "./Header/header";
import Result from "./listComponent";

const testResults = [
  {
    name: "test",
    address: "test",
    description: "test",
    printer: 1,
    wifi: 1,
    study: 1,
  },
];

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
      <Result
        name={testResults[0].name}
        address={testResults[0].address}
        description={testResults[0].description}
        printer={testResults[0].printer}
        wifi={testResults[0].wifi}
        study={testResults[0].study}
      />
      ;
    </div>
  );
}

export default Results;
