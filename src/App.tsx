import React from 'react'
import './styles/app.css'
import { Route, Switch } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { Header, Content, Footer } from './components'
import { LocationPage } from './pages/LocationPage/LocationPage'

function App() {
  return (
    <div>
      <Header />
      <Content>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/location/:name" exact component={LocationPage} />
        </Switch>
      </Content>
      <Footer />
    </div>
  )
}

export default App
