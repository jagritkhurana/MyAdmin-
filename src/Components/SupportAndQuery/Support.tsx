  import {Swiper, SwiperSlide} from 'swiper/react'
  import {Navigation ,Autoplay} from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import { socket } from '../../Socket'
  import { ChevronLeft,ChevronRight,Send } from 'lucide-react'
import { useEffect, useState } from 'react'



  

  function Support() {
    const images=[
      "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1733342421852-3bce709563e4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1592805144716-feeccccef5ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1631744591853-998c4308bbb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=1089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const[OpenChat,setOpenChat]=useState(false)
    const [messages,Setmessages]=useState<any[]>([])
    const[input,setinput]=useState("")

    const SenderId="admin"
    const reciverId="user1"


    useEffect(()=>{
      socket.emit('join',SenderId)

      socket.on("receiveMessage",(data)=>{
        Setmessages((prev)=>[
          ...prev,
          data
        ])
      })

      return()=>{
        socket.off('receiveMessage')
      }
      

    },[])

    const sendMessage=()=>{
      if(!input.trim()) return

      const messagedata={
        senderId:SenderId,
        receiverId: reciverId,
        message:input
      }

      socket.emit('sendMessage',messagedata)

      Setmessages((prev)=>[
        ...prev,{
          senderId:SenderId,
          message:input
        }
      ])
      setinput("")
    }

    return (
      <div className='bg-white p-10 m-8 rounded-2xl'>
        <div className='relative max-w-6xl mx-auto overflow-visible'>
          <button className="prev absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow">
            <ChevronLeft />
          </button>

          <button className="next absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow">
            <ChevronRight />
          </button>
          <Swiper
          modules={[Navigation,Autoplay]}
          navigation={{
            prevEl:".prev",
            nextEl:".next"
          }}
          autoplay={{delay:2000}}
          spaceBetween={20}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          >
            {images.map((image,i)=>(
              <SwiperSlide key={i} className="flex">
                <div className='overflow-hidden rounded-3xl'>
                  <img src={image} alt=""
                  className='h-[400px] w-full object-cover rounded-3xl'
                  />

                </div>

              </SwiperSlide>

            ))}

          </Swiper>


        </div>

        <div className='flex mt-10 justify-center'>
          <button onClick={()=>setOpenChat(true)} className='bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-600'>
            Chat
          </button>
          {OpenChat && 
          <div className='fixed inset-0  backdrop-blur-md bg-white/20 flex justify-center items-center z-50'>
            <div className='bg-white w-[700px] h-[600px] rounded-3xl flex flex-col'>
              <div className='p-5 border-b flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Query details</h1>
                <button 
                onClick={()=>setOpenChat(false)}
                >X</button>
              </div>
              <div className='flex-1 overflow-y-auto p-5 space-y-6'>
                {
                  messages.map((msg,i)=>(
                    <div key={i}>
                      <p className='font-semibold mb-2'>
                        {msg.senderId==='admin'?"Admin":"User"}
                      </p>
                      <div className={`p-4 rounded-2x max-w-[80%]
                      ${msg.senderId==='admin'?"bg-blue-600 ml-auto rounded-2xl  text-white":"bg-gray-200   rounded-2xl text-black"}
                      `}>
                        {msg.message}

                      </div>
                    </div>
                  ))
                }

              </div>
              <div className='border-t p-4 flex gap-3'>
                <input type="text"
                value={input}
                onChange={(e)=>setinput(e.target.value)}
                placeholder='Add response'
                className='flex-1 border rounded-xl px-4 py-3 outline-none'
                />
                <button onClick={sendMessage} 
                className='bg-blue-500
                text-white
                px-5
                rounded-xl
                hover:bg-blue-600
                transition-all
                '>
                  <Send size={20}/>

                </button>

              </div>
            </div>

          </div>

          }


        </div>
        
      </div>
    )
  }

  export default Support
