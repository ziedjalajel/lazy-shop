import logo from './logo.svg';//this is how to import logos&images
import './App.css';//this is how to add cdd

function App() {
  return (//this what will render on the screen . and it's not html it's called jsx(javascript XML) and you can right js in it 
    <div className="title">
    
        
        <h1 className="h1">
         Lazy Chairs for Lazy US 
        </h1>
        <h5 className="h2">
          One more action for the lazy life you deserve .
        </h5>
        <img className="App-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3Tzrr666L7QiUIlBV7Aw132gtFLlcdyUgg&usqp=CAU"  alt="logo" />
        
    
    </div>
  );
}

export default App;//1export default per file 
