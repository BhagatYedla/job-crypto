const ProductList = (props) => {
    console.log('Props in child ' , props)
    return(  
    <>
	<p>{props.filteredItems}</p>
	</>
    )
}


export default ProductList