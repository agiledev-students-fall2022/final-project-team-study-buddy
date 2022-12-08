import React, { useEffect, useState } from 'react'
import './Results.css'
import axios from 'axios'
import Header from './Header/header'
import Result from './listComponent'

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
    let status = false
    console.log('data: ', data.results)
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
