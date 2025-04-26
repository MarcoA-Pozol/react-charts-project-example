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
        id: 4,
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
        selling_price: 180,
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
    {
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
        id: 13,
        name: "Coffee Maker",
        description: "Programmable coffee maker with stainless steel carafe.",
        category: "Appliances",
        brand: "Breville",
        country: "Australia",
        cost_price: 90,
        selling_price: 180,
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
    }
  ];
  