import itemsData from "../../data/dataItems"
import Item from "./Item"
import { useSelector } from "react-redux"
import { getSelectedCategory } from "../../redux/itemsSlice"

const Items = () => {
const selectedCategory = useSelector(getSelectedCategory);
return(<div>
    {itemsData
    .filter(item => {
        if (selectedCategory === 'ALL') return true;
        return selectedCategory === item.category;
    })
    .map(item => <Item item={item}/>)}
</div>)
}

export default Items