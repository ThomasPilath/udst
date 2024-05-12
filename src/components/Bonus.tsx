import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import PropsMyAreaChartInterface from '@/Interface/PropsMyAreaInterface';
import CustomTooltipProps from '@/Interface/PropsCustomTooltipInterface';

const Bonus: React.FC<PropsMyAreaChartInterface> = (props) => {
  const {dataFile, subject, title, xAxis, xLabel, yLabel} = props
  
  function CustomTooltip({ payload, label, active }: CustomTooltipProps) {
    if (!active || !payload || payload.length === 0) {
      return null;
    }
    return (
      <div className="rounded-lg border bg-amber-800 border-amber-700 p-4">
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-col'>
            <span className='text-sm text-amber-500'>
              {xLabel} : {label}
            </span>
            <span className='text-sm text-amber-500'>
              {yLabel} : {payload[0].payload[subject]}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col'>
      <h3 className='mb-4'>{title}</h3>
      <AreaChart data={dataFile} width={500} height={250}>
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
    </div>
  )
}
export default Bonus;