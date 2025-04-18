import React, {useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data Source (array of objects)
const data = [
    {month: 'January', revenue: 12657, customers_count: 3423},
    {month: 'February', revenue: 18621, customers_count: 1420},
    {month: 'March', revenue: 17438, customers_count: 2438},
    {month: 'April', revenue: 14580, customers_count: 1292},
    {month: 'May', revenue: 15035, customers_count: 2032},
    {month: 'June', revenue: 19840, customers_count: 3846},
];

// Getting numeric keys for Y axis
const numericKeys = Object.keys(data[0]).filter(
    key => typeof data[0][key] === 'number' && key !== 'month' // Key is a temporal variable for the typeof validation to add it as item in the numericKeys list
);
console.log("Hola mundo");
console.log(numericKeys);

// Show the data in a chart
const RevenuesByMonthChart = () => {
    const [yAxis, setYAxis] = useState('None');

    const handleYAxisChange = (event) => {
        setYAxis(event.target.value);
    }

    return (
        <div style={{ width: '100%', height: 400 }}>
            <h2>Revenues by {yAxis}</h2>
            {/* Mapping every key in numericKeys list and using a temporal variable 'key' to show them in the options list */}
            <select onChange={handleYAxisChange} value={yAxis}>
                <option key='None' value='None'>Select a metric</option>
                {numericKeys.map(key => (
                    <option key={key}>
                        {key}
                    </option>
                ))}
            </select>
            <ResponsiveContainer>
                <BarChart data={data} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={yAxis} fill="#8884d8" name="month" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RevenuesByMonthChart;