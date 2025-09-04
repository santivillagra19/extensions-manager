import { Header } from "./components/Header"
import { Filters } from "./components/Filters"
import { CardContainer } from "./components/CardContainer"
import { useState } from "react"

function App() {

  const [filter, setFilter] = useState('All');

  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">
      <section className="w-[343px] my-10 md:w-[672px] lg:w-[900px] xl:w-[1120px]">
        <Header />
        <Filters filter={filter} setFilter={setFilter} />
        <CardContainer filter={filter} />

      </section>
    </main>
  )
}

export default App
