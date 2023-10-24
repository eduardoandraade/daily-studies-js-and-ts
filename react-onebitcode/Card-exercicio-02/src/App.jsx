import Card from "./components/Card"
import Button from "./components/Button"
import posterImg from "./assets/fusca.jpg"
import posterImg1 from "./assets/az-fusca.jpg"

function App() {
  return (
    <div className="app">
      <Card title="Fusca Amarelo | 1979" posterImg={posterImg} altImg="Foto de um fusca amarelo"/>
      <Card title="Fusca Azul | 1798" posterImg={posterImg1} altImg="Foto de um fusca amarelo"/>
      <Button/>
    </div>
  )
}

export default App
