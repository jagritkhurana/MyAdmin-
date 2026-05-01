
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

function Doughnut() {
    const PieData=[
        {
            name:"TotalUsers",value:82123
        },
        {
            name:"TotalTrucks",value:3326
        },
        {
            name:"Support Queries",value:1000
        },
    ]

    const colors=["#22c55e", "#2563eb", "#a855f7"]
  return (
    <div className='w-full h-[300px]'>
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <PieChart>
                    <Pie
                    data={PieData}
                     dataKey='value'
                      outerRadius={100}
                       label
                         innerRadius={60}
                         
                    >
                        {PieData.map((_,index)=>(
                            <Cell key={index} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
          
        </div>
  )
}

export default Doughnut
