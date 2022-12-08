import Icon from './Icon.js'
import './Home.css'
import logo from './Logo.png'

const Home = props => {
  return (
    <div id='home-container'>
      <img className='logo' src={logo} alt='Logo' />
      <h1 className='title'>Study Buddy</h1>
      
      <form action='/results'>
        <p>
          <input type='text' name='query' placeholder='Enter ZIP Code' />
        </p>
        <p>
          <input type='submit' value='Go  🔎' title='Search' />
        </p>
      </form>

      <div id='iconContainer'>
        <Icon type='printer' in_form='yes' />
        <Icon type='study' in_form='yes' />
        <Icon type='wifi' in_form='yes' />
      </div>
    </div>
  )
}

// make this component available to be imported into any other file
export default Home
