import React from 'react'
import { useTheme } from 'Hooks'
import styled from '@emotion/styled'

const H1 = styled.h1`
  color: ${ ({theme}) => theme.color };
`

const Home = () => {
  const {theme, changeTheme} = useTheme() 

  const handleChangeTheme = () => {
    changeTheme()
  }
  return (
    <div>
      <H1>test</H1>
      <button onClick={ handleChangeTheme }>change</button>
    </div>
  )
}

export default Home