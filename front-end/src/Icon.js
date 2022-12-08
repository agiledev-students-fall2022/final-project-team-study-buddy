import { useState } from 'react'

import printerIcon from './images/printerActive.png'
import studyIcon from './images/studyActive.png'
import wifiIcon from './images/wifiActive.png'

import printerIconBlur from './images/printerInactive.png'
import studyIconBlur from './images/studyInactive.png'
import wifiIconBlur from './images/wifiInactive.png'

import './Icon.css'

const icons = {
  printer: {
    inactive: printerIconBlur,
    active: printerIcon
  },
  study: {
    inactive: studyIconBlur,
    active: studyIcon
  },
  wifi: {
    inactive: wifiIconBlur,
    active: wifiIcon
  }
}

const Icon = props => {
  const { type, inForm } = props
  const [state, setState] = useState(props.state ?? 'inactive')
  console.log(icons[type][state] === (icons[type][state === 'active' ? 'inactive' : 'active']))
  return (
    <>
      <img className='icon' alt={type} state={state} onClick={() => { state === 'inactive' ? setState('active') : setState('inactive') }} src={icons[type][state]} />
      {inForm === 'yes' ? <input type='hidden' name={type} value={state === 'active' ? 'yes' : 'no'} /> : ''}
    </>
  )
}

export default Icon
