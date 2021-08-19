import React from 'react'
import './styles/app.css'
import { Route, Switch } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { Header, Content, Footer } from './components'

function App() {
  return (
    <div className="content">
      <Header />
      <Content>
        <Switch>
          <Route path="/" exact component={MainPage} />
        </Switch>
      </Content>
      <Footer />
    </div>
  )
}

export default App
