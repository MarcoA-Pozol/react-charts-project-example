import './App.css'
import AgesByNameChart from './components/AgesByNameChart.jsx';
import RevenuesByMonthChart from './components/RevenuesByMonthChart.jsx';
import ProductsTableChartVisualization from './components/ProductsTableChartVisualization.jsx';

function App() {
  return (
    <>
      <body>
        <div className='content'>
          <ProductsTableChartVisualization/>
          <AgesByNameChart/>
          <RevenuesByMonthChart/>
        </div>
      </body>
    </>
  )
}

export default App
