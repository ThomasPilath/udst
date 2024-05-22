import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Dot } from 'recharts';
import { getTotal, useActivities } from '@/store/useData';
import { PropsMyChartsInterface, PropsCustomTooltipInterface } from '@/Interface/PropsInterface';
import { useTheme } from './ThemeProvider';

const MyCharts: React.FC<PropsMyChartsInterface> = (props) => {
  const {chartParams} = props
  const data = useActivities((store) => store.activities)
  const setTotal = getTotal((store) => store.setTotal)
  const {theme} = useTheme()
  const [ xAxis, setXAxis] = React.useState<string>("")
  const [ xLabel, setXLabel] = React.useState<string>("")
  const [ yLabel, setYLabel] = React.useState<string>("")
  const [ subject, setSubject] = React.useState<string>("")

  React.useEffect(() => {
    if (chartParams === "salary" ) {
      setYLabel("Salaire")
      setSubject("salary")
      setXAxis("date")
      setXLabel("Date")
      setTotal(data.reduce((acc, cur) => acc + cur.salary, 0))
    } else if (chartParams === "transfert" ) {
      setXAxis("date")
      setXLabel("Date")
      setYLabel("Récoltes")
      setSubject("recovery")
      const totalRecovery = data.reduce((acc, cur) => acc + cur.recovery, 0)
      const totalDeposit = data.reduce((acc, cur) => acc + cur.deposit, 0)
      setTotal(totalRecovery + totalDeposit)
    }
  }, [data])

  function CustomTooltip({ payload, label, active }: PropsCustomTooltipInterface) {
    if (!active || !payload || payload.length === 0) {
      return null;
    }

    return (
      <div className="rounded-lg border text-sm text-stone-900 border-stone-600 bg-stone-400/75 dark:text-stone-100 dark:border-stone-300 dark:bg-stone-800/75 p-4">
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex flex-col'>
            <span>
              {xLabel} : {label && (
                <span>{label.split("-").reverse().slice(0, 2).join("/")}</span>
              )}
            </span>
            {chartParams === "transfert" && (
              <span>
                Dépôt : {payload && (
                  payload[0].payload.deposit
                )}
              </span>
            )}
            <span>
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
    <section className='w-full h-full pt-20'>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} width={400} height={200} margin={{top: 60,right: 0,left: -61,bottom: -30}} >
          <XAxis
            dataKey={xAxis}
            stroke={'#00000000'} // transparent
          />
          <YAxis
            dataKey={subject}
            stroke={'#00000000'} // transparent
          />
          <Tooltip
            cursor={{
              stroke: "#00000000" // transparent
            }}
            content={<CustomTooltip />}
          />
          <Area
            width={400}
            height={200}
            type="monotone"
            dataKey={subject}
            stroke={theme === "light" ? '#57534e' : '#d6d3d1'} // stone-600 | stone-300
            fill="#44403c50" // stone-700-50
            dot={theme === "light" ? {stroke: '#57534e', strokeWidth: 2} : {stroke: '#d6d3d1', strokeWidth: 2}}
          />
          {chartParams === "transfert" && (
              <Area
                type="monotone"
                dataKey={"deposit"}
                stroke={theme === "light" ? '#57534e' : '#d6d3d1'} // stone-600 | stone-300
                fill="#44403c75" // stone-700-75
                dot={theme === "light" ? {stroke: '#57534e', strokeWidth: 2} : {stroke: '#d6d3d1', strokeWidth: 2}}
              />
            )}
        </AreaChart>
      </ResponsiveContainer>
    </section>
  )
}
export default MyCharts;