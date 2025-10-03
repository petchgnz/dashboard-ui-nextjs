import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'
import { studentsData } from '@/lib/data'
import { notFound } from 'next/navigation'

const SingleStudentPage = async ({
  params,
}: {
  params: { id: string }
}) => {
  const { id } = params;
  const numId = parseInt(id)
  const student = studentsData.find((s) => s.id === numId)
  if (!student) return notFound()

  const attendance = '94%'
  const grade = student.grade
  const lessons = 6
  const className = student.class

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky flex flex-1 gap-4 rounded-md px-4 py-6">
            <div className="w-1/3 lg:w-2/3">
              <Image
                src={student.photo}
                alt={student.name}
                width={144}
                height={144}
                className="h-36 w-36 scale-x-[-1] transform rounded-full object-cover"
              />
            </div>

            <div className="flex w-2/3 flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">{student.name}</h1>
              <p className="text-sm text-gray-500">
                {student.email ?? 'No bio available.'}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
                <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span className="">A+</span>
                </div>

                <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span className="">January 2025</span>
                </div>

                <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span className="">{student.email}</span>
                </div>

                <div className="flex w-full items-center gap-2 md:w-1/3 lg:w-full 2xl:w-1/3">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span className="">{student.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARD */}
          <div className="flex flex-1 flex-wrap justify-between gap-4">
            {/* CARD */}
            <div className="flex w-full gap-4 rounded-md bg-white p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />

              <div className="">
                <h1 className="text-xl font-semibold">{attendance}</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>

            {/* CARD */}
            <div className="flex w-full gap-4 rounded-md bg-white p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />

              <div className="">
                <h1 className="text-xl font-semibold">{grade}</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>

            {/* CARD */}
            <div className="flex w-full gap-4 rounded-md bg-white p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />

              <div className="">
                <h1 className="text-xl font-semibold">{lessons}</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>

            {/* CARD */}
            <div className="flex w-full gap-4 rounded-md bg-white p-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />

              <div className="">
                <h1 className="text-xl font-semibold">{className}</h1>
                <span className="text-sm text-gray-400">Class Name</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 h-[800px] rounded-md bg-white p-4">
          <h1 className="text-lg font-semibold">Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right */}
      <div className="flex w-full flex-col gap-4 xl:w-1/3">
        <div className="rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
            <Link className="bg-lamaSkyLight rounded-md p-3" href="/">
              Student&apos;s Classes
            </Link>

            <Link className="bg-lamaPurpleLight rounded-md p-3" href="/">
              Student&apos;s Students
            </Link>

            <Link className="bg-lamaYellowLight rounded-md p-3" href="/">
              Student&apos;s Lessons
            </Link>

            <Link className="rounded-md bg-pink-50 p-3" href="/">
              Student&apos;s Exams
            </Link>

            <Link className="bg-lamaSkyLight rounded-md p-3" href="/">
              Student&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  )
}

export default SingleStudentPage
