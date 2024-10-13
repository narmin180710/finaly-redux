const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if(quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    return(<div>
        <button className="glow-on-hover1" onClick={addQuantity}>+</button>
        <span className="quantity">{quantity}</span>
        <button className="glow-on-hover1"onClick={removeQuantity}>-</button>
    </div>)
}

export default ChangeQuantity;