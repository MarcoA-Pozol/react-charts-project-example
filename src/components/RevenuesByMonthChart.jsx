import React, {useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data Source (array of objects)
const data = [
    {month: 'January', revenue: 12657, customers_count: 3423, store:'N101'},
    {month: 'February', revenue: 18621, customers_count: 1420, store:"N102"},
    {month: 'March', revenue: 17438, customers_count: 2438, store:"N103"},
    {month: 'April', revenue: 14580, customers_count: 1292, store:"N104"},
    {month: 'May', revenue: 15035, customers_count: 2032, store:"N105"},
    {month: 'June', revenue: 19840, customers_count: 3846, store:"N106"},
];

// Getting numeric keys for Y axis
const numericKeys = Object.keys(data[0]).filter(
    key => typeof data[0][key] === 'number' && key !== 'month' // Key is a temporal variable for the typeof validation to add it as item in the numericKeys list
);
const generalKeys = Object.keys(data[0]).filter(
    key => typeof data[0][key] !== 'number'
);

// Show the data in a chart
const RevenuesByMonthChart = () => {
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
                <BarChart data={data} margin={{top: 50, right: 30, left: 40, bottom: 5}}>
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

export default RevenuesByMonthChart;