




const Filter= ()=>{
    return (
        <div class="container">
        <h1>Food Ordering System</h1>
        <form id="food-order-form">
            <label for="food-dropdown">Select your food:</label>
            <select id="food-dropdown" name="food-dropdown">
                <option value="rating">rating</option>
                <option value="avgPrice">Burger</option>
                <option value="">Sushi</option>
                <option value="pasta">Pasta</option>
                <option value="salad">Salad</option>
            </select>
            <button type="button" id="submit-button">Order Now</button>
        </form>
        <div id="order-confirmation" class="hidden">
            <p>Your order has been placed!</p>
        </div>
    </div>
    )
}



export default Filter;

 

    
