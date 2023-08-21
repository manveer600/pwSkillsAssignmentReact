function List(props) {
    const listItems = props.items.map((item)=>(
        <li>{item}</li>)
    )



    
    return(
        <ul>{listItems}</ul>
    )
}


export default List;