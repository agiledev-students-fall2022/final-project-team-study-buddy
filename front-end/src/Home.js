import Icon from './Icon.js';
import './Home.css'
import logo from './Logo.png'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Home = props => {
  return (
    /*
    <html>
      <body>
        <div id='container'>
          <h1 className='title'>STUDY BUDDY</h1>
          <form action='/results'>
            <p>
                <input type='text' name='query' placeholder='Enter ZIP Code' pattern="[0-9]{5}" required />
            </p>
            <p>
                <div id = 'iconContainer'>
                  <Icon type="printer" in_form='yes' />
                  <Icon type="study" in_form='yes' />
                  <Icon type="wifi" in_form='yes' />
                </div>
            </p>
            <p>
                <input type='submit' value='Go  🔎' title="Search" />
            </p>
          </form>
        </div>
        </body>
    </html>*/
    <html>
      <body>
        <div id = "container">
          <img className = 'logo' src={logo} alt="Logo" />
          <h1 className='title'>Study Buddy</h1>

          <form action = '/results'>
            <p>
              <input type='text' name='query' placeholder='Enter ZIP Code' />
            </p>
            <p>
              <input type='submit' value='Go  🔎' title="Search" />
            </p>
          </form>

          <div id = 'iconContainer'>
            <Icon type="printer" in_form='yes' />
            <Icon type="study" in_form='yes' />
            <Icon type="wifi" in_form='yes' />
          </div>
        </div>
        </body>
    </html>
  )
}

// make this component available to be imported into any other file
export default Home
