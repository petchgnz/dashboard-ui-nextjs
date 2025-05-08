'use client'

import Image from "next/image";

const FormModel = ({
  table,
  type,
  data,
  id
}: {
  table:
  "teacher"
  | "student"
  | "parent"
  | "subject"
  | "class"
  | "lesson"
  | "exam"
  | "assignment"
  | "result"
  | "attendance"
  | "event"
  | "announcement";
  type: "create" | "update" | "delete" | "view";
  data?: any;
  id?: number;

}) => {

  const size = type === 'create' ? "w-8 h-8" : 'w-7 h-7';
  const bgColor = type === 'create' ? 'bg-lamaYellow' : type === "update" && "view" ? 'bg-lamaSky' : 'bg-lamaPurple';
  return <>
    <button className={`${size} ${bgColor} cursor-pointer w-8 h-8 flex items-center justify-center rounded-full`}>
      <Image src={`/${type}.png`} alt='' width={16} height={16} />
    </button>
  </>
}

export default FormModel