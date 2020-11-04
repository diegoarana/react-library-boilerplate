import React from 'react'

import ExampleComponent from 'npm-react-typescript-template'
// material UI
import { ThemeProvider } from '@material-ui/core/styles'

export default function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          display: 'flex',
          width: '50%',
          padding: 30,
        }}
      >
        <ExampleComponent text="holis" />
      </div>
    </ThemeProvider>
  )
}
