import products from "./products"
import Home from "./Components/Home"
import './App.css';//this is how to add cdd

function App() {
  const newArr = products.map((product)=>(
  <div> 
    <p><img className="productimage" src={product.image}/></p>
    <p>{product.name}</p>
    <p>{product.price} JD</p>
   
  </div>
  ));

  return (//this what will render on the screen . and it's not html it's called jsx(javascript XML) and you can right js in it 
    <div className="title">
    <Home/>
         
         <div class="narray">{newArr}</div> 
          
        
    
    </div>
  );
}

export default App;//1export default per file 
