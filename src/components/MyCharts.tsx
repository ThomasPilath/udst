import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useActivities } from '@/store/useData';
import { PropsMyChartsInterface, PropsCustomTooltipInterface } from '@/Interface/PropsInterface';

const MyCharts: React.FC<PropsMyChartsInterface> = (props) => {
  const {chartParams} = props
  const activities = useActivities((store) => store.activities)
  const {subject, title, xAxis, xLabel, yLabel} = chartParams

  function CustomTooltip({ payload, label, active }: PropsCustomTooltipInterface) {
    if (!active || !payload || payload.length === 0) {
      return null;
    }
    return (
      <div className="rounded-lg border border-amber-600 bg-stone-800 bg-opacity-50 text-amber-500 p-4">
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-col'>
            <span className='text-sm text-amber-500'>
              {xLabel} : {label && (
                <span>{label.split("-").reverse().slice(0, 2).join("/")}</span>
              )}
            </span>
            <span className='text-sm text-amber-500'>
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
    <div className='h-fit border border-red-600'>
      <h3 className='mb-4'>{title}</h3>
      <ResponsiveContainer className='max-h-64 border border-blue-600 w-full'>
        <AreaChart data={activities} margin={{top: 10,right: 30,left: 0,bottom: 0}}>
          <CartesianGrid strokeDasharray="2 2" stroke='#fef3c725' />
          <Tooltip
            cursor={{
              radius: 4,
              stroke: "#fdba7475",
            }}
            content={<CustomTooltip />}
          />
          <Area
            type="monotone"
            dataKey={subject}
            stroke="#d97706"
            fill="#fef08a25"
          />
          <XAxis
            dataKey={xAxis}
            stroke="#d97706"
            tickLine={false}
            fontSize={10}
            tickFormatter={(value: any) => {
              return value.split("-").reverse().slice(0, 2).join("/")
            }}
          />
          <YAxis
            dataKey={subject}
            stroke="#d97706"
            tickLine={false}
            fontSize={10}
            interval={1}
            tickFormatter={(value: any) => {
              return `$${Intl.NumberFormat("en-US").format(value)}`
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
export default MyCharts;