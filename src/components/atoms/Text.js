import React from 'react'

const Text = (props) => {
  return (
    <span style={style}>{props.Text}</span>
  )
}

const style = {
    'fonstSize': '3rem',
    'fontWeight': 'bold',
    'color': '#fac000'
}

export default Text