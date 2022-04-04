import React from "react";
import useChart from "../../hooks/useChart";
import "./Dashboard.css";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    LabelList,
    Label,
    Area,
    AreaChart,
} from "recharts";

const Dashboard = () => {
    const [chartData] = useChart();
    console.log(chartData);
    return (
        <div className="chart-area py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-3">Monthly Investment</h2>
                        <ResponsiveContainer aspect={2} height="100%">
                            <LineChart
                                width={500}
                                height={400}
                                data={chartData}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="investment"
                                    stroke="#8884d8"
                                    activeDot={{ r: 8 }}
                                    dot={{
                                        stroke: "#44c0ff",
                                        strokeWidth: 4,
                                        r: 6,
                                        cx: 3,
                                        cy: 3,
                                        fill: "white",
                                    }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Monthly Revenue</h2>
                        <ResponsiveContainer aspect={2} height="100%">
                            <BarChart width={730} height={250} data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="revenue" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-3">Monthly Revenue and Investment</h2>
                        <ResponsiveContainer aspect={2} height="90%">
                            <AreaChart
                                width={700}
                                height={250}
                                data={chartData}
                                margin={{
                                    top: 10,
                                    right: 20,
                                    left: 10,
                                    bottom: 0,
                                }}
                            >
                                <defs>
                                    <linearGradient
                                        id="colorUv"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="5%"
                                            stopColor="#8884d8"
                                            stopOpacity={0.8}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="#8884d8"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                    <linearGradient
                                        id="colorPv"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="5%"
                                            stopColor="#82ca9d"
                                            stopOpacity={0.8}
                                        />
                                        <stop
                                            offset="95%"
                                            stopColor="#82ca9d"
                                            stopOpacity={0}
                                        />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#8884d8"
                                    fillOpacity={1}
                                    fill="url(#colorUv)"
                                    activeDot={{ r: 8 }}
                                    dot={{
                                        stroke: "#44c0ff",
                                        strokeWidth: 6,
                                        r: 4,
                                        cx: 3,
                                        cy: 3,
                                        fill: "white",
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="investment"
                                    stroke="#82ca9d"
                                    fillOpacity={1}
                                    fill="url(#colorPv)"
                                    activeDot={{ r: 8 }}
                                    dot={{
                                        stroke: "#44c0ff",
                                        strokeWidth: 4,
                                        r: 4,
                                        cx: 3,
                                        cy: 3,
                                        fill: "white",
                                    }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Monthly Sells</h2>
                        <ResponsiveContainer aspect={2} height="100%">
                            <PieChart width={730} height={250}>
                                <Pie
                                    data={chartData}
                                    dataKey="sell"
                                    nameKey="month"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={50}
                                    fill="#8884d8"
                                />
                                <Pie
                                    data={chartData}
                                    dataKey="sell"
                                    nameKey="month"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#82ca9d"
                                    label
                                />
                                <Tooltip />

                                <Cell />
                                <LabelList />
                                <Label />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
