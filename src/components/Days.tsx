import { getWeekDay } from '../utils'

import { useGlobalContext } from '../hooks/useGlobalhook'

import { DisplayIndexProps } from '../typings'


const DaysElement = ({displayIndex, setDisplayIndex}:DisplayIndexProps) => {
  const { days} = useGlobalContext()

  return (   
      <div className={`flex items-center flex-wrap gap-2 mb-5`}>
        {days?.map((day, index) => {
          return (
            <div
              className={`flex-1 flex flex-col items-center gap-1  rounded-3xl p-2 font-medium ${
                index === displayIndex ? 'bg-primary text-white' : 'bg-white'
              }`}
              key={index}
              onClick={() => setDisplayIndex(index)}
            >
              <img src={day.day.condition.icon} alt='' />
              <p>{getWeekDay(day.date)}</p>
              <p>{day.day.avgtemp_f}&deg;</p>
            </div>
          )
        })}
      </div>
     
   
  )
}

export default DaysElement
