import styled ,{createGlobalStyle}  from "styled-components"

export const GlobalStyle=createGlobalStyle `
display:flex;
flex-direction:column;
align-items:center;
h1{
    font-family:sans-serif
}
body{background-color: ${props=>props.theme.backgroundColor}
}
`
export const theme = {
mainColor:"#B08968",
backgroundColor:"#DDB892",
textColor:"#343a40",

}
export const List=styled.div`
 display: flex;
justify-content: space-between;
align-items:center;
gap:50px;
`
export const item = styled.div`
  align-items: center;
height: 250px;
width: 250px;
justify-content: space-around;
`