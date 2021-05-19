import Header from './Components/Header'
import Tasks from './Components/Tasks'
import Timer from './Components/Timer'

function App() {
  return (
    <div className='app'>
      <div className='app__container'>
        <Header />
        <Timer />
        <Tasks />
      </div>
    </div>
  )
}

export default App
