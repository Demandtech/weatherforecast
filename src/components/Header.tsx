import { formatTime, formatDate} from '../utils'
import {Greeting} from '../components'

const Header = () => {
  
  return (
    <header className='pl-2 md:pl-5'>
      <p className='text-primary text-4xl font-normal  pt-7 pb-2 font-neue'>
        {formatTime('')}
      </p>
      <p className='text-secondary pb-3'>{formatDate()}</p>
      <Greeting />
    </header>
  )
}

export default Header
