import React ,{useContext} from 'react'
import {ThemeContext} from './theme-context'

const {theme,toggleTheme} = useContext(ThemeContext)


export const Theme = () => {
  return (
    <>
     <div>theme - {theme}</div>
     <button onClick={toggleTheme}>change theme</button>
    </>
   
  )
}
