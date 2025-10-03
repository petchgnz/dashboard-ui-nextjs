import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { parentsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

type Parent = {
  id: number
  name: string
  email?: string
  students: string[]
  phone?: string
  address: string
}

const columns = [
  {
    header: 'Info',
    accessor: 'info',
  },
  {
    header: 'Student Names',
    accessor: 'studentNames',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'action',
  },
]

const ParentListPage = () => {
  const renderRow = (item: Parent) => {
    return (
      <tr
        className="hover:bg-lamaPurpleLight border-b border-gray-200 text-sm even:bg-slate-50"
        key={item.id}
      >
        <td className="flex items-center gap-4 p-4">
          {/* <Image
            src={item.photo}
            alt="" width={40}
            height={40}
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          /> */}
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item?.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.students.join(', ')}</td>
        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden md:table-cell">{item.address}</td>
        <td className="">
          <div className="flex items-center gap-2">
            {role === 'admin' && (
              <>
                {/* <FormModel table="parent" type="update" data={item} /> */}
                <button className="bg-lamaSky flex h-7 w-7 cursor-not-allowed items-center justify-center rounded-full">
                  <Image src="/update.png" alt="" width={14} height={14} />
                </button>
                <FormModel table="parent" type="delete" id={item.id} />
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
        <h1 className="hidden text-lg font-semibold md:block">All Parents</h1>
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
              // <FormModel table="parent" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default ParentListPage
