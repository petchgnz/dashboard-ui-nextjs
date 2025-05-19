'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import InputField from '../InputField'

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long!' })
    .max(20, { message: 'Username must be at most 20 characters long!' }),
  email: z.string().email({ message: 'Invalid email address!' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long!' }),
  firstName: z.string().min(1, { message: 'First name is required!' }),
  lastName: z.string().min(1, { message: 'Last name is required!' }),
  phone: z.string().min(1, { message: 'Phone name is required!' }),
  address: z.string().min(1, { message: 'Phone name is required!' }),
  bloodType: z.string().min(1, { message: 'Blood type is required!' }),
  birthday: z.date({ message: 'Birthday is required!' }),
  sex: z.enum(['male', 'female'], { message: 'Sex is required! ' }),
  img: z.instanceof(File, { message: 'Image is required!' }),
})

type Inputs = z.infer<typeof schema>

const TeacherForm = ({
  type,
  data,
}: {
  type: 'create' | 'update'
  data?: any
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form action="" className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new teacher</h1>
      <span className="text-xs font-medium text-gray-400">
        Authentication Information
      </span>

      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.username}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.username}
          register={register}
          error={errors?.password}
        />
      </div>

      <span className="text-xs font-medium text-gray-400">
        Personal Information
      </span>

      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.username}
          register={register}
          error={errors?.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.username}
          register={register}
          error={errors?.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.username}
          register={register}
          error={errors?.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.username}
          register={register}
          error={errors?.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.username}
          register={register}
          error={errors?.bloodType}
        />
        {/* Birth Day Field */}
        <InputField
          label="Birth Day"
          name="birthday"
          type="date"
          defaultValue={data?.username}
          register={register}
          error={errors?.birthday}
        />
      </div>
      <div className="flex w-full flex-col gap-2 md:w-1/4">
        <label className="text-xs text-gray-500">Sex</label>
        <select
          className="w-full rounded-md p-2 text-sm ring-[1.5px] ring-gray-300"
          {...register('sex')}
          defaultValue={data?.sex}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors?.sex && (
          <p className="text-xs text-red-400">{errors?.sex.toString()}</p>
        )}
      </div>

      <button className="rounded-md bg-blue-400 p-2 text-white">
        {type === 'create' ? 'Create' : 'Update'}
      </button>
    </form>
  )
}

export default TeacherForm
