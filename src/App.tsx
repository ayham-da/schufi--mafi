import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from "./pages/Home/Home";
import Gallery from './pages/Gallery/GalleryPage'
import AboutMe from "./pages/AboutMe/AboutMe";
import MyProjekt from "./pages/MyProjekt/MyProjekt";
import Jornalist from "./pages/Jornalist/Jornalist";
import Contact from './components/Kontakt/Kontakt'




import MainHeader from './components/Nav/MainHeader1'


function App(): JSX.Element {
  return (
      <Router basename="Home">
        <MainHeader />
        <Switch>
          <Route exact path="/Home" >             <Home />            </Route>
          <Route exact path="/überuns" >          <AboutMe />         </Route>
          <Route exact path="/events" >           <MyProjekt />       </Route>
          <Route exact path="/jornalist" >        <Jornalist />       </Route>
          <Route exact path="/gallery">           <Gallery />         </Route>
          <Route exact path="/kontakt">           <Contact />         </Route>
          <Route exact path="*" >                 <Home />            </Route>


        </Switch>
      </Router>
  )
}

export default App
