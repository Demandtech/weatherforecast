import { MagnifyingGlass } from 'react-loader-spinner'

const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height='80'
      width='80'
      glassColor='#ffffff'
      color='#5f94ff'
    />
  )
}

export default Loader
