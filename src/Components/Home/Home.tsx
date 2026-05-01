
import BarChartComponent from '../Charts/BarChartComponent'
import Doughnut from '../Charts/Doughnut'
import LineChartComponent from '../Charts/LineChartComponent'
import PieChartComponents from '../Charts/PieChartComponents'


function Home() {
  type chipData={
    title:string,
    count:string
  }[]

  const data:chipData=[
    {title:"TOTAL USERS",
      count:"82123"
    },
    {title:"TOTAL TRUCKS",
      count:"3326"
    },
    {title:"TOTAL SUPPORT AND QUERIES",
      count:"1000"
    },
  ]
  return (
    <div>
      <div className='flex gap-4 m-8 '>
        {data.map((item,index)=>(
          <div
          key={index} 
          className={`rounded-lg px-15 py-8  items-start text-left flex flex-col gap-4
          ${index=== 0? 'bg-red-300':
            index=== 1?'bg-yellow-100':
            'bg-purple-200'
          }`}>
            <p className=' text-black text-xl opacity-80 '>{item.title}</p>
            <p className='font-bold text-black text-xl'>{item.count}</p>


          </div>
        ))}
      

      </div>
      <div className='flex flex-col gap-5 p-6 w-full'>
        <div className='flex flex-col gap-5 w-full'>
          <div className='bg-white rounded-lg w-full p-10 shadow  h-[350px] relative overflow-hidden'>
            <BarChartComponent/>

          </div>
          <div className='bg-white rounded-lg w-full p-10 mt-5 shadow  h-[350px] relative overflow-hidden '>
            <LineChartComponent/>

          </div>


        </div> 
        <div className='flex gap-5 mt-5'>
          <div className='bg-white rounded-lg  w-full  shadow  p-10 h-[350px] relative overflow-hidden'>
            <PieChartComponents/>
          </div>
          <div className='bg-white rounded-lg p-10 shadow w-full  h-[350px] relative overflow-hidden'>
            <Doughnut />
          </div>
          </div> 

      </div>
    </div>
  )
}

export default Home
