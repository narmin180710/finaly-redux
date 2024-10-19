import Filter from "./Filter"

const AllItems = () => {
    return(<div>
        <h1>What will you choose this time?</h1>
        {['ALL', 'GROCERY', 'DAIRY PRODUCTS', 'HOUSEHOLD CHEMICALS'] 
        .map(category => <Filter category={category} key={category}/>)
        }
        <Filter/>
    </div>)
}

export default AllItems