import React, { useEffect, useState } from 'react'
import studyLogo from '../images/studyActive.png'
import printerLogo from '../images/printerActive.png'
import wifiLogo from '../images/wifiActive.png'
import studyLogoBlur from '../images/studyInactive.png'
import printerLogoBlur from '../images/printerInactive.png'
import wifiLogoBlur from '../images/wifiInactive.png'
import plus from '../images/plus.png'
import minus from '../images/minus.png'
import './listComponent.css'

function ListComponent (props) {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [printer, setPrinter] = useState(0)
  const [wifi, setWifi] = useState(0)
  const [study, setStudy] = useState(0)
  const [focus, setFocus] = useState(0)
  const rid = props.resourceID

  useEffect(() => {
    setName(props.name)
    setDescription(props.description)
    setAddress(props.address)
    setPrinter(props.printer)
    setWifi(props.wifi)
    setStudy(props.study)
  }, [])

  return (
    <div id='Result'>
      <div id='result-name'>
        <b onClick={() => { window.location.href = `/more?resource_id=${rid}` }}>{name}</b>
        <div id='results-toggle-wrapper'>
          {focus === 0
            ? (
              <img
                src={plus}
                id='results-toggle-plus'
                onClick={() => setFocus(!focus)}
              />
              )
            : (
              <img
                src={minus}
                id='results-toggle-minus'
                onClick={() => setFocus(!focus)}
              />
              )}
        </div>
      </div>
      <div
        id='results-logos'
        onClick={() => { window.location.href = '/more' }}
      >
        {printer === 0
          ? (
            <img src={printerLogoBlur} id='filter-logo' />
            )
          : (
            <img src={printerLogo} id='filter-logo' />
            )}
        {wifi === 0
          ? (
            <img src={wifiLogoBlur} id='filter-logo' />
            )
          : (
            <img src={wifiLogo} id='filter-logo' />
            )}
        {study === 0
          ? (
            <img src={studyLogoBlur} id='filter-logo' />
            )
          : (
            <img src={studyLogo} id='filter-logo' />
            )}
      </div>
      {focus === 0
        ? null
        : (
          <div>
            <p>{address}</p>
            <p>{description}</p>
            <details>
              <b onClick={() => { window.location.href = `/more?resource_id=${rid}` }}>Learn More</b>
            </details>
          </div>
        )}
      {/* <p>{address}</p>
      <p>{description}</p> */}
    </div>
  )
}

export default ListComponent
