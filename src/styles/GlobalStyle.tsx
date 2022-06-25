import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    li{
        list-style:none;
    }
    a{
        color:inherit;
        text-decoration:none;
        cursor:pointer;
    }
    input{
        outline:none;
    }
   body{
    overflow:hidden;
   }
`

export default GlobalStyle
