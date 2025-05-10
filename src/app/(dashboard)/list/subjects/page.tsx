"use client"
import FormModel from "@/components/FormModel"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, subjectsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Subject = {
  id: number,
  name: string,
  teachers: string[],
  address: string,
}


const columns = [
  {
    header: "Subject Name",
    accessor: "name"
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell"
  },
  {
    header: "Actions",
    accessor: "action",
  },


]

const SubjectListPage = () => {
  const renderRow = (item: Subject) => {
    return (
      <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight" key={item.id}>
        <td className="flex items-center gap-4 p-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
          </div>
        </td>

        <td className="hidden md:table-cell">
          {/* <p className="text-xs text-gray-500">{item?.teachers.join(', ')}</p> */}
          {item.teachers.join(', ')}
        </td>
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
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
        <div className="flex items-center gap-4 self-end">
          <TableSearch/>
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

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />

      {/* PAGINATION */}
      <Pagination />
    </div >
  )
}

export default SubjectListPage