
import Landing_catch from './Components/landing_catch'
import Features from './Components/features'
import Header from './Components/header'
import About_us from './Components/about_us'
const App = () => {

  return (
    
    <div >
      <Header/>
      <Landing_catch order_text={'oredr-2'} order_illu={'oredr-1'} />
      <Features/>
      <About_us/>
      
       </div>

  )
}



export default App
