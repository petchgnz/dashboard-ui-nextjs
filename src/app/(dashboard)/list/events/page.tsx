"use client"
import FormModel from "@/components/FormModel"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { eventsData, role } from "@/lib/data"
import Image from "next/image"

type Event = {
    id: number,
    title: string,
    class: string,
    date: string,
    startTime: string,
    endTime: string,
}


const columns = [
  {
    header: "Title",
    accessor: "title"
  },
  {
    header: "Classes",
    accessor: "classes",
    // className: "hidden md:table-cell"
  },
  {
    header: "Date", 
    accessor: "score",
    className: "hidden md:table-cell"
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell"
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell"
  },
  {
    header: "Actions",
    accessor: "action",
  },


]

const EventListPage = () => {
  const renderRow = (item: Event) => {
    return (
      <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight" key={item.id}>
        <td className="flex items-center gap-4 p-4">
          <h3 className="font-semibold">{item.title}</h3>
        </td>

        <td className="">{item.class}</td>

        <td className="hidden md:table-cell">{item.date}</td>
        <td className="hidden md:table-cell">{item.startTime}</td>
        <td className="hidden md:table-cell">{item.endTime}</td>

        <td className="">
          <div className="flex items-center gap-2">
            {role === "admin" && (
              <>
                <FormModel table="announcement" type="update" data={item} />
                <FormModel table="announcement" type="delete" id={item.id} />
              </>
            )}
          </div>
        </td>
      </tr>
    )
  }


  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt='' width={14} height={14} />
            </button>
            <button className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt='' width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModel table="announcement" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default EventListPage