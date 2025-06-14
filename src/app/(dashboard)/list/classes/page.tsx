"use client"

import FormModel from "@/components/FormModel"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { classesData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Class = {
  id: number,
  name: string,
  capacity: number,
  grade: number,
  supervisor: string,
}


const columns = [
  {
    header: "Class Name",
    accessor: "name"
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell"
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell"
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell"
  },
  {
    header: "Actions",
    accessor: "action",
  },

]

const ClassListPage = () => {
  const renderRow = (item: Class) => {
    console.log(`Item id is : ${item.id}`)
    return (
      <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight" key={item.id}>
        <td className="flex items-center gap-4 p-4">{item.name}</td>
        <td className="hidden md:table-cell">{item.capacity}</td>
        <td className="hidden md:table-cell">{item.grade}</td>
        <td className="hidden md:table-cell">{item.supervisor}</td>

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
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
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
      <Table columns={columns} renderRow={renderRow} data={classesData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default ClassListPage