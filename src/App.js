import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'
import Routes from 'react-static-routes'
import Header from './components/Header'

import './app.css'

class App extends React.Component{
  componentDidUpdate = () => {
    if(process){
      if(process.env.NODE_ENV === 'development'){
        window.location.reload()
      }
    }
  }
  render(){
    return(
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <div className="content">
              <Routes />
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

export default hot(module)(App)
