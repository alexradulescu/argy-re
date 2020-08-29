import React from 'react'
import { render } from 'react-dom'

import 'src/assets/bootstrap.min.css'
import 'src/assets/avantui.min.css'
import 'src/assets/corrections.css'

import { App } from './App'

const rootElement = document.querySelector('#root')
render(<App />, rootElement)
