import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

import { useState } from "react"

function App() {
  const [ count, setCount] = useState<number>(1)

  return (
    <>
    <Heading title={"Hello!"} />
    <Section>This is my Section.</Section>
    <Counter setCount={setCount}>Count is {count}</Counter>
    <List items={["Coffe", "Surfe", "Code"]} render={(item: string) => <span className="green">{item}</span>}/>
    </>
    )
    
  
}

export default App
