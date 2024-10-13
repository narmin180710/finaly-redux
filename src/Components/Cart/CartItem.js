import { useDispatch } from "react-redux";
import itemsData from "../../data/dataItems";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    console.log(cartItem)
    const items = itemsData.find(item => item.id === cartItem.itemId);
    const dispatch = useDispatch();
    return(<div>
        <img src={`${items.img}.jpg`} alt="img"/>
        <p className="names">{items.name}</p>
        <p>{cartItem.quantity} portion(s)</p>
        <p>Price: ${items.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="img"/>
        </span>
    </div>)
}

export default CartItem
























// import itemsData from "../../data/dataItems"

// const CartItem = ({cartItem}) => {
//     const items = itemsData.find(item => item.id === cartItem.itemId)
//     return(<div>
//         <p>{cartItem.quantity} portion(s)</p>
//     </div>)
// }

// export default CartItem