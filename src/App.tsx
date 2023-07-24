
import './App.css'
import { Button } from './components/Button'
import { Div } from './components/Div'
import { H1 } from './components/H1'
import { Input } from './components/Input'
import { Paragraph } from './components/Paragraph'

function App() {

  return (
    <>
      <Div>
        <H1>Soy un h1</H1>
        <Input />
        <Paragraph>Hola</Paragraph>
        <Button onClick={ () => console.log('dasd') }>Hola</Button>
      </Div>
    </>
  )
}

export default App
