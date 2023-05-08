import { useState } from 'react'
import { Days, MainContent, Loader } from '../components'
import { useGlobalContext } from '../hooks/useGlobalhook'

const MainComponent = () => {
  const [displayIndex, setDisplayIndex] = useState<number>(0)
  const { isLoading } = useGlobalContext()
  if (isLoading) {
    return (
      <div className='flex-1 flex items-center justify-center'>
        <Loader />
      </div>
    ) 
  }
  return (
    <div className='pl-2 lg:pl-5 pt-10 '>
      <Days displayIndex={displayIndex} setDisplayIndex={setDisplayIndex} />
      <MainContent displayIndex={displayIndex} />
    </div>
  )
}

export default MainComponent
