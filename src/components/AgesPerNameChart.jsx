import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Carlos', edad: 22 },
  { nombre: 'María', edad: 28 },
  { nombre: 'Luis', edad: 35 },
];

const EdadesChart = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2>Edades por Persona</h2>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="edad" fill="#8884d8" name="Edad" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EdadesChart;