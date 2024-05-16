import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useActivities } from '@/store/useData';
import { PropsMyChartsInterface, PropsCustomTooltipInterface } from '@/Interface/PropsInterface';

const MyCharts: React.FC<PropsMyChartsInterface> = (props) => {
  const {chartParams} = props
  const {subject, title, xAxis, xLabel, yLabel} = chartParams
  const data = useActivities((store) => store.activities)


  function CustomTooltip({ payload, label, active }: PropsCustomTooltipInterface) {
    if (!active || !payload || payload.length === 0) {
      return null;
    }
    return (
      <div className="rounded-lg border border-stone-600 bg-stone-800/50 text-stone-300 p-4">
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-col'>
            <span className='text-sm text-stone-300'>
              {xLabel} : {label && (
                <span>{label.split("-").reverse().slice(0, 2).join("/")}</span>
              )}
            </span>
            <span className='text-sm text-stone-300'>
              {yLabel} : {payload && (
                payload[0].payload[subject]
              )}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h3 className='mb-4'>{title}</h3>
      <ResponsiveContainer className='max-h-52'>
        <AreaChart data={data} width={100} height={100} margin={{top: 10,right: 30,left: 0,bottom: 0}}>
          <CartesianGrid strokeDasharray="2 2" stroke='#fef3c725' />
          <XAxis
            dataKey={xAxis}
            stroke="#d6d3d1"
            tickLine={false}
            fontSize={14}
            tickFormatter={(value: any) => {
              return value.split("-").reverse().slice(0, 2).join("/")
            }}
          />
          <YAxis
            dataKey={subject}
            stroke="#d6d3d1"
            tickLine={false}
            fontSize={14}
            interval={2}
            tickFormatter={(value: any) => {
              if(subject === "salary") {
                return `$${Intl.NumberFormat("en-US").format(value)}`
              }
              return `${Intl.NumberFormat("en-US").format(value)} sacs`
            }}
          />
          <Tooltip
            cursor={{
              radius: 4,
              stroke: "#44403c",
            }}
            content={<CustomTooltip />}
          />
          <Area
            type="monotone"
            dataKey={subject}
            stroke="#d6d3d1"
            fill="#44403c50"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
export default MyCharts;