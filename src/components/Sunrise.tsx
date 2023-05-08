import { FiSun } from 'react-icons/fi'
import { BsMoonStars } from 'react-icons/bs'
import { useGlobalContext } from '../hooks/useGlobalhook'
import { DisplayIndexProps } from '../typings'


const Sunrise = ({ displayIndex }:DisplayIndexProps) => {
 
  const {days} = useGlobalContext() ?? {}
  return (
    <article>
      <h3 className='mb-2'>Sunrise & Sunset</h3>
      <div className='flex justify-between bg-[#fff8f0] p-2 rounded-md mb-4'>
        <div className='flex items-center gap-2'>
          <FiSun className='text-2xl text-[#ffbf77]' />
          <div className='text-sm'>
            <p className='text-[#dadae5]'>Sunrise</p>
            <b className=' text-primary'>{days?.[displayIndex]?.astro.sunrise}</b>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <BsMoonStars className='text-2xl text-[#ffbf77]' />
          <div className='text-sm '>
            <p className='text-[#dadae5]'>Sunset</p>
            <b className=' text-primary'>{days?.[displayIndex]?.astro.sunset}</b>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Sunrise