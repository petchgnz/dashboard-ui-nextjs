"use client"
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece]

// Temporary data
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
]

const EventCalendar = () => {

  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar
        onChange={onChange}
        value={value}
      />

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className='text-xl font-semibold my-2'>Events</h1>
          <Image className='' alt='' src='/moreDark.png' width={20} height={20} />
        </div>
        {events.map((data) => (
          <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple jk" key={data.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{data.title}</h1>
              <span className="text-xs text-gray-300">{data.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar