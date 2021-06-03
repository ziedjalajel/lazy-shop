import products from "../products"
import "../App.css"
import Product from "./Product"
import {List} from "../styles"
const ProductList =()=>{

    const newArr = products.map((product)=>
        <Product key ={products.id} prd={product}/>
        ); 

    return (

        <List>{newArr}</List> 
    )
}
export default ProductList;