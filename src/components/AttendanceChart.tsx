"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tue',
        present: 70,
        absent: 60,
    },
    {
        name: 'Wed',
        present: 90,
        absent: 75,
    },
    {
        name: 'Thu',
        present: 65,
        absent: 55,
    },
    {
        name: 'Fri',
        present: 70,
        absent: 65,
    },
];

const AttendanceChart = () => {
    return (
        <div className='bg-white p-4 rounded-lg h-full'>
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image className='' alt='' src='/moreDark.png' width={20} height={20} />
            </div>

            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
                    <XAxis 
                        dataKey="name" 
                        axisLine={false}
                        tick={{fill: "#d1d5db"}}
                        tickLine={false}
                    />

                    <YAxis 
                        axisLine={false}
                        tick={{fill: "#d1d5db"}}
                        tickLine={false}
                    />
                    <Tooltip 
                        contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}
                    />
                    <Legend align="left" verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                    <Bar 
                        dataKey="present" 
                        fill="#fae27c" 
                        activeBar={<Rectangle 
                        fill="pink" 
                        stroke="blue" />} 
                        legendType='circle'
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar 
                        dataKey="absent" 
                        fill="#c3ebfa" 
                        activeBar={<Rectangle 
                        fill="gold" 
                        stroke="purple" />} 
                        legendType='circle'
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart