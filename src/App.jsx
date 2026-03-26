import './App.css'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import { Suspense, use, useEffect, useState } from 'react'

// way 1 to fatch data
// const playerData = async () => {
//   const res = await fetch('/playersData.json')
//   return res.json();
// }

// way 2 to fatch data
const fatchData = fetch('/playersData.json')
  .then(res => res.json())


function App() {

  // const [data, setData] = useState([])


  useEffect(() => {
    // way 4 to fatch data 
    // fetch('/playersData.json')
    //   .then(res => res.json())
    //   .then(info => setData(prevData => [...prevData, info]))
    //   .catch(e => console.log('error:', e))




  }, [])


  return (


    <>
      <Navbar />

      <Suspense fallback={<h3>hello there...</h3>}>

        <Main playersInfo={fatchData} />
      </Suspense>



    </>
  )
}

export default App
