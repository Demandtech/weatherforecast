import {Header, MainComponent, Aside, ErrorModal} from './components'

function App() {
  return (
    <main className='max-w-7xl mx-auto min-h-screen  flex flex-col lg:flex-row'>
      <section className='w-100 lg:w-2/3 min-h-screen bg-background p-5 flex flex-col'>
        <Header />
        <MainComponent />
      </section>
      <Aside />
      <ErrorModal />
    </main>
  )
}

export default App
