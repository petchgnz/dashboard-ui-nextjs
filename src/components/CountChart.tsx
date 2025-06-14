"use client"
import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 42,
    fill: '#fae27c',
  },
  {
    name: 'Boys',
    count: 65,
    fill: '#c3ebfa',
  },
];

const CountChart = () => {
  return (
    <div className="p-4 bg-white rounded-xl w-full h-full ">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer >
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar
              background
              dataKey="count"
            />

          </RadialBarChart>
        </ResponsiveContainer>
        <Image className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/maleFemale.png' alt='' width={50} height={50} />

      </div>

      {/* Bottoms */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-500'>Boys (55%)</h2>
        </div>

        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full"></div>
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-500'>Girls (45%)</h2>
        </div>
      </div>

    </div>
  )
}



export default CountChart