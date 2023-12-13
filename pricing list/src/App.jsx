import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
  <div class="container"> 
  <h2>REACT PRICE CARD TASK</h2> 
  
  <div class="price-row"> 
    <div class="price-col"> 
      <p>Free</p> 
      
      <h3> $0/<span>month</span></h3> 
      <ul> 
        <li>SINGLE USER</li> 
        <li>50 GB STORAGE</li> 
        <li>UNLIMITTED PUBLIC PROJECT</li> 
        <li>COMMUNITY ACESS</li> 
      </ul> 
      <button>BUTTON</button> 
    </div> 
    <div class="price-col" id="best"> 
      <p id="prem">PLUS</p> 
      
      <h3>$9/<span>month</span></h3> 
      <ul> 
        <li>5 USERS</li> 
        <li>50 GB STORAGE</li> 
                  <li>UNLIMITTED PUBLIC PROJECT</li> 
        <li>COMMUNITY ACESS</li> 
                  <li>UNLIMITTED PRIVATE PROJECTS</li>
                  <li>DEDICTED PHONE SUPPORT</li>
                  <li> FREE SUBDOMAIN</li>
        
      </ul> 
      <button>BUTTON</button> 
    </div> 
    <div class="price-col"> 
      <p>PRO</p> 
       
      <h3>$49/<span>month</span></h3> 
      <ul> 
        <li>5 USERS</li> 
        <li>50 GB STORAGE</li> 
                  <li>UNLIMITTED PUBLIC PROJECT</li> 
        <li>COMMUNITY ACESS</li>
                  <li>UNLIMITTED PRIVATE PROJECTS</li>
                  <li>DEDICTED PHONE SUPPORT</li>
                  <li> FREE SUBDOMAIN</li>
                  <li>MONTHLY STATUS REPORTS</li>
      </ul> 
      <button>BUTTON</button> 
    </div> 
  </div> 
</div> 
)}

export default App
