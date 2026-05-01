import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation ,Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { ChevronLeft,ChevronRight } from 'lucide-react'

function Support() {
  const images=[
    "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1733342421852-3bce709563e4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1592805144716-feeccccef5ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1631744591853-998c4308bbb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=1089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
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
      
    </div>
  )
}

export default Support
