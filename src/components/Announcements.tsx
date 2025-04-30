// import Image from "next/image"

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-300">View All</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-01-01</span>
          </div>

          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tenetur inventore pariatur eum.
          </p>
        </div>
        
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tenetur inventore pariatur eum.
          </p>
        </div>

        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tenetur inventore pariatur eum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Announcements