/**
 * @class ExampleMaterialUIComponent
 */
//import * as React from 'react';
import React from 'react'
import { TextField } from '@material-ui/core'

interface IProps {
  text: string
}

export default function ExampleMaterialUIComponent({ text }: IProps) {
  return (
    <TextField fullWidth variant="outlined">
      {text}
    </TextField>
  )
}
