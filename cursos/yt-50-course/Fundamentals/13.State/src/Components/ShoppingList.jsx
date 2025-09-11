import React, {useState} from "react";

const ShoppingList = () => {
    const [product, setProduct] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name  || !quantity) return;

        const newItem = {
            name,
            quantity: parseInt(quantity),
        }
        setProduct((prevItems)=>[...prevItems, newItem]);
        setName("");
        setQuantity("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome produto"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Quantidade do produto"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="submit">Adicionar Item</button>
            </form>
            <ul>
                {product.map((item, index)=>
                    <li key={index}>Name: {item.name} - Quantity: {item.quantity}</li>
                )}
            </ul>
        </div>
    );
};

export default ShoppingList;
