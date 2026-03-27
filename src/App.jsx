import { ToastContainer } from 'react-toastify'
import './App.css'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import { Suspense, useEffect, useState } from 'react'
import Footer from './components/footer/Footer'

// way 1 to fetch data
// const playerData = async () => {
//   const res = await fetch('/playersData.json')
//   return res.json();
// }

// way 2 to fetch data
const fetchData = fetch('/playersData.json')
  .then(res => res.json())

function App() {

  // const [data, setData] = useState([])

  useEffect(() => {
    // way 4 to fetch data 
    // fetch('/playersData.json')
    //   .then(res => res.json())
    //   .then(info => setData(prevData => [...prevData, info]))
    //   .catch(e => console.log('error:', e))

  }, [])

  const [coins, setCoins] = useState(50000)


  return (

    <>
      <Navbar coins = {coins} />
      <Suspense fallback={<h3>hello there...</h3>}>
        <Main coins={coins} setCoins={setCoins} playersInfo={fetchData} />
      </Suspense>

      <Footer/>

      <ToastContainer />
    </>
  )
}

export default App
