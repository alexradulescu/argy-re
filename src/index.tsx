import React from 'react'
import { render } from 'react-dom'

import { App } from './App'
import './assets/light.standalone.css'

const rootElement = document.querySelector('#root')
render(<App />, rootElement)
