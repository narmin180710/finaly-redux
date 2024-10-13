import { useState } from "react"
import ChangeQuantity from "../Cart/ChangeQuantity"
import { addItemToCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"

const Item = ({item}) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    return(<div className="items">
        <h2 className="name">{item.name}</h2>
        <img src={`${item.img}.jpg`}alt="img"/>
        <p className="price">$ {item.price}</p>
        <div className="left">
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={() => {dispatch(addItemToCart({item, quantity}))}} class="glow-on-hover" type="button">Add to cart</button>
        </div>
        {/* <button onClick={() => {dispatch(addItemToCart({item, quantity}))}}></button> */}
    </div>)
}

export default Item