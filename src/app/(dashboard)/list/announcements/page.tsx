'use client'
import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { announcementsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

type Event = {
  id: number
  title: string
  class: string
  date: string
}

const columns = [
  {
    header: 'Title',
    accessor: 'title',
  },
  {
    header: 'Classes',
    accessor: 'classes',
    // className: "hidden md:table-cell"
  },
  {
    header: 'Date',
    accessor: 'score',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
]

const EventListPage = () => {
  const renderRow = (item: Event) => {
    return (
      <tr
        className="hover:bg-lamaPurpleLight border-b border-gray-200 text-sm even:bg-slate-50"
        key={item.id}
      >
        <td className="flex items-center gap-4 p-4">
          <h3 className="font-semibold">{item.title}</h3>
        </td>

        <td className="">{item.class}</td>

        <td className="hidden md:table-cell">{item.date}</td>

        <td className="">
          <div className="flex items-center gap-2">
            {role === 'admin' && (
              <>
                {/* <FormModel table="event" type="update" data={item} /> */}
                <button className="bg-lamaSky flex h-7 w-7 cursor-not-allowed items-center justify-center rounded-full">
                  <Image src="/update.png" alt="" width={14} height={14} />
                </button>
                <FormModel table="event" type="delete" id={item.id} />
              </>
            )}
          </div>
        </td>
      </tr>
    )
  }

  return (
    <div className="m-4 mt-0 flex-1 rounded-md bg-white p-4">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">
          All Announcements
        </h1>
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="bg-lamaYellow flex h-8 w-8 cursor-pointer items-center justify-center rounded-full">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="bg-lamaYellow flex h-8 w-8 cursor-pointer items-center justify-center rounded-full">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === 'admin' && (
              <button className="bg-lamaYellow flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full">
                <Image src="/create.png" alt="" width={14} height={14} />
              </button>
              // <FormModel table="announcement" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default EventListPage
