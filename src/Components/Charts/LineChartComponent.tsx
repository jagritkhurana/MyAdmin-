
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,CartesianGrid } from "recharts"

function LineChartComponent() {
    
    type Mydata = {
        name: string,
        TotalUsers: number,
        TotalTrucks: number,
    }[]

    const data: Mydata = [
        {
            name: "Jan",
            TotalUsers: 850,
            TotalTrucks: 1450
        },
        {
            name: "Feb",
            TotalUsers: 1250,
            TotalTrucks: 1650
        },
        {
            name: "Mar",
            TotalUsers: 1250,
            TotalTrucks: 850
        },
        {
            name: "Apr",
            TotalUsers: 1350,
            TotalTrucks: 1650
        },
        {
            name: "May",
            TotalUsers: 650,
            TotalTrucks: 850
        },
        {
            name: "Jun",
            TotalUsers: 950,
            TotalTrucks: 1450
        },
        {
            name: "Jul",
            TotalUsers: 550,
            TotalTrucks: 1450
        },
        {
            name: "Aug",
            TotalUsers: 650,
            TotalTrucks: 1450
        },
        {
            name: "Sep",
            TotalUsers: 1250,
            TotalTrucks: 1750
        },
        {
            name: "Oct",
            TotalUsers: 650,
            TotalTrucks: 1450
        },
        {
            name: "Nov",
            TotalUsers: 650,
            TotalTrucks: 1450
        },
        {
            name: "Dec",
            TotalUsers: 650,
            TotalTrucks: 1450
        },
    ]
  return (
    <div className='w-full h-[300px]'>
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                    <LineChart data={data}>
                       < CartesianGrid vertical={false} stroke="#e5e7eb"/>
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 2000]}/>
                        <Tooltip />
                        <Legend />
                        <Line  type="monotone" dataKey="TotalUsers" fill="#22c55e" >
                            {/* <LabelList
                            dataKey="TotalUsers" position="top"                         /> */}
                        </Line>
    
                        <Line type="monotone" dataKey="TotalTrucks" fill="#2563eb" >
                            {/* <LabelList
                            dataKey="TotalTrucks" position="top"                         /> */}
                        </Line>
    
    
                    </LineChart>
    
                </ResponsiveContainer>
    
            </div>
  )
}

export default LineChartComponent
