import React from 'react'
import Loginpage from './Loginpage'
import Joiningoptions from './Joiningoptions'
import Navbar from './Navbar'

function Profilepage() {


    return (
        <div>
          <Navbar/>
          <Loginpage/>
          <div>
            <Joiningoptions/>
          </div>
        </div>
    )
}

export default Profilepage
