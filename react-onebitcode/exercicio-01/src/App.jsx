import reactLogo from '/react.png'


function Component(props){
  return (
    <>
      <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          {props.list && props.list.length > 0 && (
          <ul>
            {props.list.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
          </ul>
          )}
      </div>
    </>
  )
}


function Btn(props){
  return (
    <>
    <button type='button' className='btn'>
      {props.children}
    </button>
    </>
  )
}

function App() {

  const steps = ['Uso de dados dinamicos com JSX', 'Criação de novos componentes', 'Estilização de components', 'Reutilização de components', 'Uso de props e children', 'Uso de eventos com JavaScript']

  return (
    <>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />

          <Component title='React' description='A biblioteca para usuários de interfaces web e nativas.'/> 
          <Btn>Aprenda React</Btn>
          <Btn>Referência da API</Btn>
          <hr />

          <Component title='Crie interfaces de usuários e component' description='React permite que você construa interfaces usuário a partir de componentes.'/>
          <hr />
          <Component
            title='Escreva componentes com código e marcação'
            description='Componentes React são funções em JavaScript. A sintaxe de marcação é a JSX; É uma extensão da sintaxe JavaScript popularizada pelo React.'
          />

          <hr />
          <Component 
            title='Próximos Passos'
            list={steps}
          />



      </div>
    </>
  )
}

export default App
