import './App.css'
import AgesByNameChart from './components/AgesByNameChart.jsx';
import RevenuesByMonthChart from './components/RevenuesByMonthChart.jsx'

function App() {
  return (
    <>
      <body>
        <div className='content'>
          <AgesByNameChart/>
          <RevenuesByMonthChart/>
        </div>
      </body>
    </>
  )
}

export default App
