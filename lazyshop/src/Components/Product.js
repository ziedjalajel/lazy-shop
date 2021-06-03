import {item} from "../styles"
const Product =(props)=>{
    const product = props.prd

    return(
    <item> 
        <p><img src={product.image}/></p>
        <p>{product.name}</p>
        <p>{product.price} JD</p>
       
      </item>
      )
}
export default Product;