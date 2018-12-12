import React from 'react'
import { Link} from 'react-router-dom'

const Home = () => (
  <div>
    <h1>
      Welcome to my page
    </h1>
    <Link to='/characters'>
      <button>
        Show me the Mortys
      </button>
    </Link>
  </div>
)

export default Home;