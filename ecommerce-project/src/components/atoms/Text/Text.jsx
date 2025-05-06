import React from 'react'
import { Typography } from '@mui/material'

const Text = ({ variant, content }) => {
  if (variant === 'h1' || variant === 'h2' || variant === 'h3' || variant === 'h4' || variant === 'h5' || variant === 'h6') {
    return (
      <Typography sx={{ color: '#000000' }} variant={variant} component={variant}>{content}</Typography>
    )
  }
  if (variant === 'subtitle1' || variant === 'subtitle2' || variant === 'body1' || variant === 'body2') {
    return (
      <Typography sx={{ color: '#000000' }} variant={variant} component='p'>{content}</Typography>
    )
  }
  if (variant === 'caption' || variant === 'overline') {
    return (
      <Typography sx={{ color: '#000000' }} variant={variant} component='span'>{content}</Typography>
    )
  }
  return (
    <Typography sx={{ color: '#000000' }} variant='body1' component='p'>{content}</Typography>
  )
}

export default Text