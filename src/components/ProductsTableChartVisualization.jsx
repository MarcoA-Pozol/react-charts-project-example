import React, {useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dataset
const dataset = [
    {
      id: 1,
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI.",
      category: "Electronics",
      brand: "LogiTech",
      country: "USA",
      cost_price: 20,
      selling_price: 35,
      stock_quantity: 120,
      get revenue() {
        return this.selling_price - this.cost_price;
      },
      get potential_cost_price() {
        return this.stock_quantity * this.cost_price;
      },
      get potential_selling_price() {
        return this.stock_quantity * this.selling_price;
      },
      get potential_revenue() {
        return this.stock_quantity * this.revenue;
      },
      get need_resupply() {
        return this.stock_quantity < 0 || this.potential_revenue < 50000;
      },
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      name: "Gaming Keyboard",
      description: "Mechanical keyboard with RGB lighting.",
      category: "Electronics",
      brand: "Corsair",
      country: "Germany",
      cost_price: 50,
      selling_price: 80,
      stock_quantity: 60,
      get revenue() {
        return this.selling_price - this.cost_price;
      },
      get potential_cost_price() {
        return this.stock_quantity * this.cost_price;
      },
      get potential_selling_price() {
        return this.stock_quantity * this.selling_price;
      },
      get potential_revenue() {
        return this.stock_quantity * this.revenue;
      },
      get need_resupply() {
        return this.stock_quantity < 0 || this.potential_revenue < 50000;
      },
      created_at: new Date().toISOString()
    },
    {
        id: 3,
        name: "Gaming Mouse XL90",
        description: "fast, well performed and ideal for gaming.",
        category: "Electronics",
        brand: "Sonic",
        country: "Japan",
        cost_price: 27,
        selling_price: 48,
        stock_quantity: 80,
        get revenue() {
        return this.selling_price - this.cost_price;
        },
        get potential_cost_price() {
        return this.stock_quantity * this.cost_price;
        },
        get potential_selling_price() {
        return this.stock_quantity * this.selling_price;
        },
        get potential_revenue() {
        return this.stock_quantity * this.revenue;
        },
        get need_resupply() {
        return this.stock_quantity < 0 || this.potential_revenue < 50000;
        },
        created_at: new Date().toISOString()
    },
    {
        id: 4,
        name: "Crusher Evo",
        description: "Diadem headphones with microphone and external sound blocker.",
        category: "Electronics",
        brand: "Skullcandy",
        country: "China",
        cost_price: 80,
        selling_price: 129,
        stock_quantity: 8,
        get revenue() {
        return this.selling_price - this.cost_price;
        },
        get potential_cost_price() {
        return this.stock_quantity * this.cost_price;
        },
        get potential_selling_price() {
        return this.stock_quantity * this.selling_price;
        },
        get potential_revenue() {
        return this.stock_quantity * this.revenue;
        },
        get need_resupply() {
        return this.stock_quantity < 0 || this.potential_revenue < 50000;
        },
        created_at: new Date().toISOString()
    },
    {
        id: 5,
        name: "Smartphone",
        description: "Latest 5G smartphone with OLED display.",
        category: "Electronics",
        brand: "Samsung",
        country: "South Korea",
        cost_price: 600,
        selling_price: 950,
        stock_quantity: 30,
        get revenue() {
        return this.selling_price - this.cost_price;
        },
        get potential_cost_price() {
        return this.stock_quantity * this.cost_price;
        },
        get potential_selling_price() {
        return this.stock_quantity * this.selling_price;
        },
        get potential_revenue() {
        return this.stock_quantity * this.revenue;
        },
        get need_resupply() {
        return this.stock_quantity < 0 || this.potential_revenue < 50000;
        },
        created_at: new Date().toISOString()
    },
    {
        id: 6,
        name: "Office Chair",
        description: "Ergonomic mesh chair with adjustable lumbar support.",
        category: "Furniture",
        brand: "ErgoFit",
        country: "Canada",
        cost_price: 120,
        selling_price: 250,
        stock_quantity: 80,
        get revenue() {
        return this.selling_price - this.cost_price;
        },
        get potential_cost_price() {
        return this.stock_quantity * this.cost_price;
        },
        get potential_selling_price() {
        return this.stock_quantity * this.selling_price;
        },
        get potential_revenue() {
        return this.stock_quantity * this.revenue;
        },
        get need_resupply() {
        return this.stock_quantity < 0 || this.potential_revenue < 50000;
        },
        created_at: new Date().toISOString()
    },
    {
        id: 7,
        name: "Coffee Maker",
        description: "Programmable coffee maker with stainless steel carafe.",
        category: "Appliances",
        brand: "Breville",
        country: "Australia",
        cost_price: 90,
        selling_price: 120,
        stock_quantity: 100,
        get revenue() {
        return this.selling_price - this.cost_price;
        },
        get potential_cost_price() {
        return this.stock_quantity * this.cost_price;
        },
        get potential_selling_price() {
        return this.stock_quantity * this.selling_price;
        },
        get potential_revenue() {
        return this.stock_quantity * this.revenue;
        },
        get need_resupply() {
        return this.stock_quantity < 0 || this.potential_revenue < 50000;
        },
        created_at: new Date().toISOString()
    },
    {
        id: 8,
        name: "Running Shoes",
        description: "Lightweight running shoes with cushioned sole.",
        category: "Footwear",
        brand: "Nike",
        country: "USA",
        cost_price: 75,
        selling_price: 150,
        stock_quantity: 50,
        get revenue() {
        return this.selling_price - this.cost_price;
        },
        get potential_cost_price() {
        return this.stock_quantity * this.cost_price;
        },
        get potential_selling_price() {
        return this.stock_quantity * this.selling_price;
        },
        get potential_revenue() {
        return this.stock_quantity * this.revenue;
        },
        get need_resupply() {
        return this.stock_quantity < 0 || this.potential_revenue < 50000;
        },
        created_at: new Date().toISOString()
    },
  ];

// Getting numeric keys for Y axis
const numericKeys = Object.keys(dataset[0]).filter(
    key => typeof dataset[0][key] === 'number' && key !== 'month' // Key is a temporal variable for the typeof validation to add it as item in the numericKeys list
);
const generalKeys = Object.keys(dataset[0]).filter(
    key => typeof dataset[0][key] !== 'number'
);

const ProductsTableChartVisualization = () =>{
    const [yAxis, setYAxis] = useState('None');
    const [xAxis, setXAxis] = useState('None');

    const handleXAxisChange = (event) => {
        setXAxis(event.target.value);
    }
    const handleYAxisChange = (event) => {
        setYAxis(event.target.value);
    }

    return (
        <div style={{ width: '100%', height: 400, marginBlock:"60px", border:"5px solid rgba(150, 100, 220, 0.4)", borderRadius:'5px'}}>
            <h2>{yAxis.replace('_', ' ').replace(yAxis.charAt(0), yAxis.charAt(0).toUpperCase())}s by {xAxis}</h2>
            {/* Filters X/Y axis */}
            <select onChange={handleXAxisChange} value={xAxis}>
                <option key='None' value='None'>Select agrupation</option>
                {generalKeys.map(key => (
                    <option key={key}>
                        {key}
                    </option>
                ))}
            </select>
            <select onChange={handleYAxisChange} value={yAxis}>
                <option key='None' value='None'>Select a metric</option>
                {numericKeys.map(key => (
                    <option key={key}>
                        {key}
                    </option>
                ))}
            </select>

            {/* Chart */}
            <ResponsiveContainer style={{backgroundColor:'transparent'}}>
                <BarChart data={dataset} margin={{top: 50, right: 30, left: 40, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" stroke='white'/>
                    <XAxis dataKey={xAxis} label={{value:xAxis.replace(xAxis.charAt(0), xAxis.charAt(0).toUpperCase()), fontSize:'1.4rem', fontWeight:'bold', fill:'white'}} angle={-45} textAnchor='end' height={120} tick={{ fontSize: 16, fontFamily:'monospace'}}/>
                    <YAxis label={{value:yAxis.replace('_', ' ').replace(yAxis.charAt(0), yAxis.charAt(0).toUpperCase()), angle:-90, position:'insideLeft', fontSize:'1.3rem', fontWeight:'bold', fill:'white'}} tickFormatter={(value) => `$${value.toLocaleString()}`}/> {/* format as current(integrate validation for currencies is needed here) */}
                    <Tooltip contentStyle={{background:'rgba(255, 90, 10, 0.9)', color:'white', fontWeight:'bold'}} formatter={(value) => [`$${value.toLocaleString()}`, yAxis.replace('_', ' ')]} labelFormatter={(label) => `Month: ${label}`}/>
                    <Legend verticalAlign='top' height={36} formatter={(value) => value.replace('_', ' ')}/>
                    <Bar dataKey={yAxis} fill="rgb(50, 10, 150)" name={xAxis.replace(xAxis.charAt(0), xAxis.charAt(0).toUpperCase())} label={{position:'top', formatter:(value) => `$${value.toLocaleString()}`}}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ProductsTableChartVisualization;