import { ToggleUsers, setSearch, selectAll, selectMode } from '@/Features/NotiSlice'
import { useAppDispatch, useAppSlector } from '@/App/Store/Hooks'




function Notification() {

  const dispatch = useAppDispatch()

  const { search, users, selectedUsers, SelectMode } = useAppSlector((state) => state.noti)

  const FilteredUser = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()))



  return (
    <>
      <div className='mt-5'>
        <div className='flex justify-between items-center'>

          <h1 className='text-2xl font-semibold underline ml-5'>Notification Management/Add Notification</h1>
          <div className='mr-5 flex gap-5'>
            <button className='px-5 py-2 rounded-full  border border-red-600 text-red-600 '>Cancel</button>
            <button className='px-7 py-2 rounded-full border border-blue-600 bg-blue-600 text-white'>Send</button>
          </div>
        </div>



        <div className='flex gap-10 '>




          <div className='flex flex-col gap-7'>
            <div className='m-10 '>
              <div className='flex flex-col '>

                <label className='text-xl font-semibold' >Add Title</label>
                <input type="text"
                  placeholder='Add Title'
                  className='w-[600px] p-3 border bg-white rounded-lg shadow '
                />
              </div>
              <div className='flex flex-col mt-5'>
                <label className='text-xl font-semibold' >Message</label>
                <textarea
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur doloribus consequuntur modi tempore, unde fuga nemo soluta similique iste enim praesentium explicabo non incidunt ipsum asperiores. Asperiores, modi"
                  className='w-[600px] p-3 border bg-white rounded-lg shadow  h-[250px] '
                />

              </div>

            </div>
          </div>

          <div className='flex flex-col gap-3  mt-15'>
            <label className='flex items-center gap-2'>
              <input type="checkbox"
                checked={SelectMode === 'all'}
                onChange={() => {
                  dispatch(selectMode("all"))
                }}
              />
              All users
            </label>
            <label className='flex items-center gap-2'>
              <input type="checkbox"
                checked={SelectMode === 'selected'}
                onChange={() => {
                  dispatch(selectMode("selected"))
                }}
              />
              Selected users
            </label>
            <div className='w-[400px] bg-gray-100 p-4 rounded-lg '>
          <input type="text"
          placeholder='search'
          className='w-full p-2 border mb-4 rounded '
          value={search}
          onChange={(e)=> dispatch(setSearch(e.target.value))}
          />
          <div className='flex flex-col max-h-[400px] gap-2 overflow-y-auto'>
            {FilteredUser.map((user)=>(
              <label
              key={user.id}
              className='flex items-center justify-between bg-white p-2 rounded'
              >
                <div className='flex items-center gap-2'>
                  <input type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  disabled={SelectMode==='all'}
                  onChange={()=>dispatch(ToggleUsers(user.id))}
                  />
                  <span>{user.name}</span>

                </div>
                <div className='text-sm text-gray-500'>
                {user.email}
                </div>

              </label>
            ))}

          </div>


        </div>

          </div>
        </div>
        



      </div>

    </>
  )
}

export default Notification
