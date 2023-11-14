import '../style/App.scss'
import Div from './Div/Div'

function App() {

  const arr = [
    {
      title: 300,
      speed: 10,
      className1: 'blue_dark',
      className2: 'blue',

    },
    {
      title: 450,
      speed: 50,
      className1: 'green_dark',
      className2: 'green',

    },
    {
      title: 550,
      speed: 100,
      className1: 'red_dark',
      className2: 'red',

    },
    {
      title: 1000,
      speed: 200,
      className1: 'dark_dark',
      className2: 'dark',

    },
  ]

  return (
    <div className='mainDiv'>
      <Div {...arr[0]} />
      <Div {...arr[1]} />
      <Div {...arr[2]} />
      <Div {...arr[3]} />
    </div>
  )
}

export default App
