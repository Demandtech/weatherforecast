import { useState, useEffect } from 'react'
import { formatTime } from '../utils'
import { useGlobalContext } from '../hooks/useGlobalhook'
import { Hr, DisplayIndexProps } from '../typings'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ITEMS_PER_PAGE = 3

const Hour = ({ displayIndex }: DisplayIndexProps) => {
  const { days } = useGlobalContext()
  const [totalPage, setTotalPage] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)

  const startIndex = currentPage * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE



  useEffect(() => {
    setTotalPage(days?.[displayIndex]?.hour.length)

    // eslint-disable-next-line
  }, [days])

  return (
    <div className=' bg-white rounded-lg p-5 mb-5'>
      <header className='flex items-center justify-between mb-2'>
        <h3>Hours</h3>
        <div className='flex gap-5'>
          <button
            onClick={() => {
              if (startIndex > 0) {
                setCurrentPage(currentPage - 1)
              } else {
                setCurrentPage(0)
              }
            }}
            className='btn cursor-pointer bg-[#fff8f0] text-[#ffbf77] px-2 py-1 rounded-md grid place-items-center'
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => {
              if (typeof totalPage === 'number') {
                if (endIndex < totalPage) {
                  setCurrentPage(currentPage + 1)
                } else {
                  setCurrentPage(0)
                }
              }
            }}
            className='btn cursor-pointer bg-[#fff8f0]  text-[#ffbf77] px-2 rounded-md grid place-items-center'
          >
            <FaChevronRight />
          </button>
        </div>
      </header>
      <div className='flex justify-between gap-1 flex-wrap'>
        {days[displayIndex]?.hour
          .map((hr: Hr, index: number) => {
            return (
              <div
                className='py-2 text-center bg-primary text-white flex-1 break-words transition-transform duration-200'
                key={index}
              >
                <p className='text-xs font-semibold'>{formatTime(hr.time)}</p>
                <span className='text-xs'>{hr.temp_f}&deg;</span>
              </div>
            )
          })
          .slice(startIndex, endIndex)}
      </div>
    </div>
  )
}

export default Hour
