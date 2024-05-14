import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import PropsMyAreaInterface from '@/Interface/PropsMyAreaInterface';
import PropsCustomTooltipInterface from '@/Interface/PropsCustomTooltipInterface';
import { useChartsParams } from '@/store/useChartsParams';

const Activity: React.FC<PropsMyAreaInterface> = (props) => {
  const {dataFile, title, xAxis, xLabel, yLabel} = props
  const { subject, setSubject } = useChartsParams()
  
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

  React.useEffect(() => {
    if (title === "Salaires") {
      setSubject("salary")
    } else if (title === "Récoltes") {
      setSubject("recovery")
    } else if (title === "Dépôts") {
      setSubject("deposit")
    }
    console.log("SUJET :", subject)
  }, [title])

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
          width={100}
          height={100}
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
    </div>
  )
}
export default Activity;