import React, { useEffect, useState } from 'react'
import './Results.css'
import axios from 'axios'
import Header from './Header/header'
import Result from './listComponent'
// import app from "../../../back-end/app";

function Results () {
  const [printer, setPrinter] = useState(true)
  const [wifi, setWifi] = useState(true)
  const [study, setStudy] = useState(true)
  const [data, setData] = useState({ results: [] })

  const params = new URLSearchParams(window.location.search)

  useEffect(() => {
    const fetchResults = async () => {
      try {
        console.log('zip: ' + params.get('query'))
        console.log(
          `http://${process.env.REACT_APP_SERVER_URL}/results/${params.get(
            'query'
          )}`
        )
        await axios
          .get(
            `http://${process.env.REACT_APP_SERVER_URL}/results/${params.get(
              'query'
            )}`
          )
          .then((res) => setData(res.data))
      } catch (err) {
        console.error(err)
      }
    }
    fetchResults()
    setPrinter(true)
    setWifi(true)
    setStudy(true)
  }, [])

  const resultShower = () => {
    // return "IN RESULT";
    let status = false

    // Set up below here an API call to the backend to display data from resultRoutes.js --NICO
    // What Kevin Wrote Before=> return testResults.map((result) => { --NICO

    // This alert is just to show that the front end gets the correct data-- NICO

    // x = pipe.data;
    console.log('data: ', data.results)
    // return <div>HELLO</div>;
    return data.results.map((result, id) => {
      status =
        (printer && result.printer) ||
        (wifi && result.wifi) ||
        (study && result.study)
      if (status) {
        return (
          <Result
            resourceID={result.id}
            name={result.name}
            description={result.description}
            address={result.address}
            printer={result.printer}
            wifi={result.wifi}
            study={result.study}
          />
        )
      } else {
        return null
      }
    })
  }

  return (
    <div id='container'>
      <Header
        printer={printer}
        wifi={wifi}
        study={study}
        setPrinter={() => setPrinter(!printer)}
        setWifi={() => setWifi(!wifi)}
        setStudy={() => setStudy(!study)}
      />
      <div id='result-shower'>
        {data.results.length === 0
          ? (
            <div>Error: No results were found for that ZIP code.</div>
            )
          : (
              resultShower()
            )}
      </div>
    </div>
  )
}

export default Results
