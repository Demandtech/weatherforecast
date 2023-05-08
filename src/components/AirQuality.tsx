import { IoLocationOutline } from 'react-icons/io5'
import { useGlobalContext } from '../hooks/useGlobalhook'
import { DisplayIndexProps } from '../typings'


const AirQuality = ({ displayIndex }: DisplayIndexProps) => {
  const { days, userLocation } = useGlobalContext()
  return (
    <div className=' bg-white rounded-lg p-5'>
      <header className='flex justify-between items-center mb-3 '>
        <div>
          <h3>Air Quality Index</h3>
        </div>
        <div className='flex items-center justify-between gap-2'>
          <IoLocationOutline className='text-primary text-md' />
          <div className='text-[#dadae5]'>
            <span>{userLocation.name}</span> , <span>{userLocation.region}</span>
          </div>
        </div>
      </header>
      <article className='flex justify-between items-center gap-2 flex-wrap'>
        <div className='text-darkGreen bg-lightGreen flex-1 text-center text-sm px-1 py-5 rounded-md'>
          <strong>
            {days[displayIndex]?.day.air_quality.pm2_5
              ? days[displayIndex]?.day.air_quality.pm2_5.toFixed(1)
              : 'wait'}
          </strong>
          <p className=''>PM2</p>
        </div>
        <div className='text-darkGreen bg-lightGreen flex-1 text-center text-sm px-1 py-5 rounded-md'>
          <strong>
            {days[displayIndex]?.day.air_quality.pm10
              ? days[displayIndex]?.day.air_quality.pm10.toFixed(1)
              : 'wait'}
          </strong>
          <p className=''>PM10</p>
        </div>
        <div className='text-darkGreen bg-lightGreen flex-1 text-center text-sm px-1 py-5 rounded-md'>
          <strong>
            {days[displayIndex]?.day.air_quality.so2
              ? days[displayIndex]?.day.air_quality.so2.toFixed(1)
              : 'wait'}
          </strong>
          <p className=''>
            SO<sub>2</sub>
          </p>
        </div>
        <div className='text-darkGreen bg-lightGreen flex-1 text-center text-sm px-1 py-5 rounded-md'>
          <strong>
            {days[displayIndex]?.day.air_quality.no2
              ? days[displayIndex]?.day.air_quality.no2.toFixed(1)
              : 'wait'}
          </strong>
          <p className=''>
            NO<sub>2</sub>
          </p>
        </div>
        <div className='text-darkGreen bg-lightGreen flex-1 text-center text-sm px-1 py-5 rounded-md'>
          <strong>
            {days[displayIndex]?.day.air_quality.o3
              ? days[displayIndex]?.day.air_quality.o3.toFixed(1)
              : 'wait'}
          </strong>
          <p className=''>
            0<sub>3</sub>
          </p>
        </div>
        <div className='text-darkGreen bg-lightGreen text-center flex-1 text-sm px-1 py-5 rounded-md'>
          <strong>
            {days[displayIndex]?.day.air_quality.co
              ? days[displayIndex]?.day.air_quality.co.toFixed(1)
              : 'wait'}
          </strong>
          <p>CO</p>
        </div>
      </article>
    </div>
  )
}

export default AirQuality