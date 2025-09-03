import { product } from "../data/products"
const Products = () => {
    return (
        <div className="flex gap-2 m-3">
            {product.map((prod)=>{
                return(
                    <div className="text-white bg-green-400 mb-4 rounded w-96 text-center p-3">
                        <h1>Nome: {prod.nome}</h1>
                        <h1>Id: {prod.id}</h1>
                        <h1>Preco: {prod.preco}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Products