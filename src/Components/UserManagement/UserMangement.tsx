import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { addUser, deleteUser, updateUser } from '@/Features/UserSlice'
import { useAppDispatch, useAppSlector } from '@/App/Store/Hooks'
import { User, Mail, Phone, Search, ArrowLeft } from "lucide-react";
import toast from 'react-hot-toast'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Controller } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { useFieldArray } from 'react-hook-form'
import type { user } from "@/Features/UserSlice"


type FormData = {
  name: string,
  email: string,
  phone: string,
  driverType: string,
  image?: string,
  validationIds: {
    type: string,
    number: string
  }[]
}


function UserMangement() {
  const dispatch = useAppDispatch()
  const users = useAppSlector((state) => state.users.users)

  const [search, setSearch] = useState("")
  const [openForm, setopenFrom] = useState(false)
  const [image, setImage] = useState<string | null>(null)
  const [selectedUser, setselectedUser] = useState<user | null>(null)
  const [openview, setopenview] = useState(false)
  const [editUser, setEditUser] = useState<user | null>(null)
  const [openDelete,setopenDelete]=useState(false)

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      phone: "",
      validationIds: [{ type: "", number: "" }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "validationIds"
  })

  useEffect(() => {
    if (editUser) {
      reset({
        name: editUser.name,
        email: editUser.email,
        phone: editUser.phone,
        driverType: editUser.driverType,
        validationIds: editUser.validationIds,
        
      })
       setImage(editUser.image || null)
    }
  }, [editUser])

  const onSubmit = (data: FormData) => {
    if (editUser) {
      dispatch(updateUser({
        id: editUser.id,
        ...data,
        subscription: "standard plan",
        image: image || ""
      }))
    } else {
      dispatch(
        addUser({
          ...data,
          phone: data.phone,
          subscription: "Standard plan",
          image: image || ""

        })
      )
    }
    toast.success(editUser ? "User updated successfully" : "User added successfully")
    reset({
      name: "",
      email: "",
      phone: "",
      driverType: "",
      validationIds: [{ type: "", number: "" }]
    })
    setImage(null)
    setEditUser(null)
    setopenFrom(false)
  }

  const FilteredUser = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='p-6'>
      <div className=' relative flex justify-between items-center mb-4'>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />


        <input type="text"
          placeholder='Search'
          className='w-[1000px] border p-2 pl-8 rounded-lg bg-white'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() =>{ 
            setEditUser(null)
            reset({
              name:"",
              email:"",
              phone:"",
              driverType:"",
              validationIds:[{type:"",number:""}]
            })
            setImage(null)
            setopenFrom(true)}}
          className='ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg'
          
        >
          Add New User

        </button>

      </div>
      <div className='bg-white rounded-lg shadow overflow-hidden'>
        <table className='w-full'>
          <thead className='bg-white'>
            <tr>
              <th className='p-5 text-left text-2xl'>All Users</th>

            </tr>


          </thead>

          <thead className='bg-gray-100 text-left'>

            <tr>
              <th className='p-3'>Name</th>
              <th className='p-3'>Email</th>
              <th className='p-3'>Phone Number</th>
              <th className='p-3'>Subscription Plan</th>
              <th className='p-3'>National ID</th>

              <th className='p-3'>Action</th>
            </tr>

          </thead>
          <tbody>
            {FilteredUser.map((user) => (
              <tr key={user.id} className='border-t'>
                <td className='p-3'>{user.name}</td>
                <td className='p-3'>{user.email}</td>
                <td className='p-3'>{user.phone}</td>
                <td className='p-3'>{user.subscription}</td>
                <td className='p-3'>{user.validationIds?.map((id, i) => (
                  <div key={i}>{id.type}:{id.number}</div>
                ))}</td>
                <td className='p-3'>
                  <button
                    // onClick={() => dispatch(deleteUser(user.id))}
                    onClick={() => {
                      setselectedUser(user),
                        setopenview(true)
                    }}
                    className='bg-blue-600 text-white px-3 py-1 rounded'
                  >
                    View

                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
      {openForm && (
        <div className='fixed inset-0 overflow-auto backdrop-blur-md bg-white/20 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-2xl w-[700px] shadow-xl relative'>
            <button
              onClick={() => setopenFrom(false)}
              className="absolute top-5 right-5 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className='text-xl font-semibold mb-6'>Add New User</h2>


            <div className='flex mb-8 h-auto'>
              <label className='cursor-pointer'>



                <div className='w-28 h-28 border-2 rounded-full border-dashed border-blue-400 flex items-center justify-center text-blue-500 text-sm cursor-pointer hover:bg-blue-50'>
                  {
                    image ? (
                      <img src={image}
                        className='w-full h-full object-cover rounded-full'
                      />) : ("Add photo")
                  }
                </div>
                <input type="file"
                  accept='image/*'
                  className='hidden'
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (!file) return

                    const url = URL.createObjectURL(file)
                    setImage(url)
                  }}
                />

              </label>

            </div>

            <form onSubmit={handleSubmit(onSubmit)}>


              <div className='grid grid-cols-2 gap-6 mb-6'>

                <div>
                  <label className='text-sm font-bold text-gray-600'>Full Name</label>
                  <div className="relative ">
                    <User className="absolute right-3 top-5 w-4 h-4 text-gray-400" />
                    <input
                      {...register("name", {
                        required: "Full name is required",
                        minLength: {
                          value: 3,
                          message: "Minimum 3 characters required"
                        }
                      })}
                      placeholder='Full Name'
                      className='border p-3 w-full mt-1 bg-gray-50  rounded-lg outline-none focus:ring-2 focus:ring-blue-400'
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>

                  <label className='text-sm font-bold text-gray-600'>Mobile Number</label>
                  <div className='relative'>
                    <Phone className="absolute right-3 top-4 w-4 h-4 text-gray-400" />





                    <Controller
                      name='phone'
                      control={control}
                      defaultValue={undefined}
                      rules={{
                        required: "Phone number is required",
                        validate: (value) =>
                          isValidPhoneNumber(value || "") || "Invalid phone number"
                        // minLength: {
                        //   value: 10,
                        //   message: "Minimum 10 numbers are required"
                        // },
                        // maxLength: {
                        //   value: 10,
                        //   message: "Maximum 10 numbers are required"
                        // },
                      }}
                      render={({ field }) => (
                        <div className="mt-1 w-full flex items-center border rounded-lg bg-gray-50 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                          <PhoneInput
                            {...field}
                            international
                            defaultCountry='IN'
                            placeholder="Enter the phone number"
                            className="[&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:border-none"

                          />
                        </div>
                      )}
                    />


                    {/* <div className="relative w-full">
                      <Phone className="absolute  right-3 top-4 w-4 h-4 text-gray-400" />


                      <input
                        {...register("phone", {
                          required: "Phone Number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter valid 10-digit number"
                          }
                        })
                        }
                        placeholder="9876543210"
                        className='border bg-gray-50 p-3  w-full rounded-r-lg outline-none focus:ring-2 focus:ring-blue-400'
                      />
                    </div> */}


                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>


              <div className='grid grid-cols-2 gap-6 mb-6'>

                <div>
                  <label className='text-sm text-gray-600 font-bold'>
                    Email Address (optional)
                  </label>
                  <div className='relative mt-1'>
                    <Mail className="absolute right-3 top-4 w-4 h-4 text-gray-400" />


                    <input
                      {...register("email", {
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter valid email"
                        }
                      })}
                      placeholder='Email'
                      className='border bg-gray-50 p-3  w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-400'
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}


                </div>

                <div>
                  <label className='text-sm font-bold text-gray-600'>Type of Driver</label>
                  <select
                    {...register("driverType", {
                      required: "Please select a Driver"
                    })}
                    defaultValue=""
                    className="border bg-gray-50 p-3 w-full mt-1 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" hidden></option>
                    <option value="Truck">Truck</option>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                  </select>
                  {errors.driverType && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.driverType.message}
                    </p>
                  )}
                </div>

              </div>
              <div className='mb-4'>
                <label className='text-sm font-bold text-gray-600'>Type of National ID</label>
                {/* <div className='grid grid-cols-2 gap-6 mb-4'>
              
                  
                  <select
                    {...register("validationid", {
                      required: "Please select a National ID"
                    })}
                    defaultValue=""
                    className="border bg-gray-50 p-3 w-full mt-1 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" ></option>
                    <option value="AddhaarCard">Addhaar Card</option>
                    <option value="DrivingLicense">Driving License</option>
                    <option value="PANCard">PANCard</option>
                  </select>
                  {errors.validationid && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.validationid.message}
                    </p>
                  )}

                

                <div>
                  <label className='text-sm font-bold text-gray-600'>National ID Number</label>
                  <div className="relative ">
                    <IdCard className="absolute right-3 top-5 w-4 h-4 text-gray-400" />
                    <input
                      {...register("validationnumber", {
                        required: "validation number is required",
                        minLength: {
                          value: 3,
                          message: "Minimum 3 characters required"
                        }
                      })}
                      placeholder='National ID Number'
                      className='border p-3 w-full mt-1 bg-gray-50  rounded-lg outline-none focus:ring-2 focus:ring-blue-400'
                    />
                  </div>
                  {errors.validationnumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.validationnumber.message}
                    </p>
                  )}
                </div>

              </div> */}

                {fields.map((field, index) => (
                  <div key={field.id} >
                    <div className='grid grid-cols-2 gap-4 mt-2'>


                    <select
                      {...register(`validationIds.${index}.type`, {
                        required: "Please select a National ID"
                      })}
                      defaultValue=""
                      className="border bg-gray-50 p-3 w-full mt-1 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                      >
                      <option value="" >Select</option>
                      <option value="Addhaar Card">Aadhar Card</option>
                      <option value="Driving License">Driving License</option>
                      <option value="PAN Card">PAN Card</option>
                    </select>

                    <input
                      {...register(`validationIds.${index}.number`, {
                        required: "validation number is required",
                        minLength: {
                          value: 3,
                          message: "Minimum 3 characters required"
                        }
                      })}
                      placeholder='National ID Number'
                      className='border p-3 w-full mt-1 bg-gray-50  rounded-lg outline-none focus:ring-2 focus:ring-blue-400'
                      />
                      </div>
                    {index === fields.length - 1 && index > 0  &&(
                      <button
                        type='button'
                        onClick={() => remove(index)}
                        className='text-red-500 text-sm'>
                        Remove

                      </button>
                    )}

                  </div>
                ))}
                <button
                  type='button'
                  onClick={() => append({ type: "", number: "" })}
                  className='mt-3 text-blue-600 text-sm'
                >
                  Add another ID

                </button>
              </div>

              <div className=' flex justify-center items-center mt-3 '>

                <button
                  type='submit'
                  className='bg-blue-600 text-white h-[48px] w-50 rounded-md hover:bg-blue-700'
                >
                  {editUser ? "Update" : "Save"}
                </button>
              </div>



            </form>



          </div>

        </div>

      )}
      {openview && selectedUser && (
        <div className='fixed inset-0 backdrop-blur-md bg-black/20 flex justify-center items-center z-50'>
          <div className='bg-white w-[700px] rounded-2xl p-6 shadow-xl relative'>
            <div className='flex items-center justify-between mb-6'>

              <button
                onClick={() => setopenview(false)}
                className='text-gray-500 border rounded-full w-8 h-8 flex  items-center justify-center'
              >
                <ArrowLeft />

              </button>
              <h2 className='text-lg font-semibold'>User Details</h2>

              <div className='flex items-center gap-3'>

                <button
                  className='px-4 py-2 border border-blue-500 text-blue-600 rounded-full text-sm '
                  onClick={() => {
                    setEditUser(selectedUser),
                      setopenview(false)
                    setopenFrom(true)

                  }}
                >
                  Edit

                </button>

                <button
                  className='px-4 py-2 border border-red-500 text-red-500 rounded-full text-sm '
                  onClick={() => {
                    // dispatch(deleteUser(selectedUser.id))
                    setopenview(false)
                    setopenDelete(true)
                  }}
                >
                  Delete

                </button>


                <button
                  onClick={() => setopenview(false)}
                  className=' text-lg text-gray-500'
                >
                  X
                </button>
              </div>

            </div>

            <div className='flex items-center gap-6 bg-gray-100 p-4 rounded-lg '>
              <img src={selectedUser.image || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"} className='w-28 h-28 border-2 rounded-full' />

              <div className='grid grid-cols-2 gap-4 w-full '>

                <div>
                  <p className='text-sm text-gray-500'>Name</p>
                  <p className='font-semibold'>{selectedUser.name}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Phone Number</p>
                  <p className='font-semibold'>{selectedUser.phone}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>E-mail</p>
                  <p className='font-semibold'>{selectedUser.email}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Subscription</p>
                  <p className='font-semibold'>{selectedUser.subscription}</p>
                </div>
              </div>


            </div>
            <div className='mt-6 '>
              <p className='font-semibold mb-2'>National IDs</p>
              {selectedUser.validationIds?.map((id, i) => (
                <div key={i} className='text-sm'>
                  {id.type}:{id.number}
                </div>
              ))}

            </div>

          </div>

        </div>
      )}
      {openDelete&&selectedUser&&(
        <div className='fixed flex flex-col justify-center bg-white/20 items-center inset-0 backdrop-blur-md z-10'>
                      <div className='bg-white p-5 rounded-lg shadow-xl '>
        
                      <div>
                        <p className='text-lg font-semibold text-black'>Are you sure that you want to <span className='text-lg font-semibold text-red-500'>Delete ?</span></p>
                      </div>
                      <div className='flex gap-3 mt-4 justify-center items-center'>
                        <button className='px-3 py-1 rounded-lg bg-red-500 border border-red-500 hover:cursor-pointer'
                        onClick={()=>{
                          dispatch(deleteUser(selectedUser.id))
                          setopenDelete(false)
                          
                        }}
                        >
                          Yes
                        </button>
                        <button className='px-3 py-1 rounded-lg bg-blue-500 border border-blue-500 hover:cursor-pointer'
                        onClick={()=>{
                          setopenview(true)
                          setopenDelete(false)

                        }}
                        >
                          No
                        </button>
        
                      </div>
        
                          </div>
        
                    </div>
      )}



    </div>
  )
}

export default UserMangement
