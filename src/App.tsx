import { Header, MainComponent, Aside, ErrorModal } from "./components";

function App() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto">
        <section className="w-100 lg:w-2/3 min-h-screen p-5 flex flex-col">
          <Header />
          <MainComponent />
        </section>
        <Aside />
      </div>
      <ErrorModal />
    </main>
  );
}

export default App;
