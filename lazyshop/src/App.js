import products from "./products"
import Home from "./Components/Home"
import ProductList from "./Components/ProductList"
import './App.css';//this is how to add cdd
import {ThemeProvider} from "styled-components"
import {theme,GlobalStyle} from "./styles"

function App() {
 

  return (//this what will render on the screen . and it's not html it's called jsx(javascript XML) and you can right js in it 
    <ThemeProvider theme={theme}>
    <div className="title">
    <GlobalStyle/>
    <Home />
    <ProductList />     

    </div>
    </ThemeProvider>
  );
}

export default App;//1export default per file 
