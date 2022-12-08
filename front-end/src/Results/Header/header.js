import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'
import studyLogo from '../../images/studyActive.png'
import printerLogo from '../../images/printerActive.png'
import wifiLogo from '../../images/wifiActive.png'
import studyLogoInactive from '../../images/studyInactive.png'
import printerLogoInactive from '../../images/printerInactive.png'
import wifiLogoInactive from '../../images/wifiInactive.png'

function Header (props) {
  return (
    <div className='header_wrapper'>
      <img src={logo} id='header-logo' />

      <h1>STUDY BUDDY</h1>
      <div id='header-logos'>
        <img
          src={props.printer ? printerLogo : printerLogoInactive}
          onClick={() => props.setPrinter()}
          id='filter-logo'
        />
        <img
          src={props.wifi ? wifiLogo : wifiLogoInactive}
          id='filter-logo'
          onClick={() => props.setWifi()}
        />
        <img
          src={props.study ? studyLogo : studyLogoInactive}
          id='filter-logo'
          onClick={() => props.setStudy()}
        />
      </div>
    </div>
  )
}

export default Header
