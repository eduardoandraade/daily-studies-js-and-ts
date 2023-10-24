import { useState } from 'react'
import Input from './components/input';
import './App.css'

function App() {
  const [ password, setPassword ] = useState("");
  const [ copyText, setCopyText ] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(10)


  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div className='App'>
      <h1>Gerador de Senha</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
      </div>
      <button onClick={generate}>Gerar senha com {passwordSize} caracteres</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div className='password'>{password}</div>
    </div>
  )
}

export default App
