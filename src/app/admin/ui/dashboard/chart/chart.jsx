"use client"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './chart.module.css'

const data = [
    { name: "Mon", visit: 4200, click: 2400 },
    { name: "Tue", visit: 3800, click: 1398 },
    { name: "Wed", visit: 5100, click: 3200 },
    { name: "Thu", visit: 2780, click: 1908 },
    { name: "Fri", visit: 6890, click: 4800 },
    { name: "Sat", visit: 3490, click: 2300 },
];

const Chart = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
                        <Legend />
                        <Line type="monotone" dataKey="visit" stroke="#8884b8"></Line>
                        <Line type="monotone" dataKey="click" stroke="#82ca9d"></Line>

                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart; 