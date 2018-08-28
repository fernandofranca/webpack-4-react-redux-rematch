import React, { Component } from 'react'
import styled from 'styled-components'

const pd = 16
const SomeStyle = styled.div`
  background: #000;
  color: #fff;
  padding: ${pd}px;
`

const Button = styled.button`
  padding: ${pd}px;
`

class Some extends Component {
  render() {
    const { stuff, $stuff, another, $another } = this.props

    return (
      <SomeStyle>
        <h2>SomeComponent</h2>
        <div>
          <Button onClick={()=>{ $stuff.increment() }}>increment</Button>
          <Button onClick={()=>{ $stuff.resetState() }}>reset</Button>
          <Button onClick={()=>{ $stuff.incrementAsync() }}>incrementAsync</Button>
          <Button onClick={()=>{ $another.increment() }}>another.increment</Button>
        </div>
        <pre>{JSON.stringify(stuff, null, 2)}</pre>
        <pre>{JSON.stringify(another, null, 2)}</pre>
      </SomeStyle>
    )
  }
}
export default Some