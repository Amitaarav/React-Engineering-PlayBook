import "./style.css";
import { useState, useEffect } from "react";

export const ProductCard = ({ product }: any) => {
    return (
        <div className="product-card bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-1">
                <span className="font-bold text-gray-800 dark:text-gray-100 block truncate">{product.title}</span>
                <p className="text-sm text-gray-500 dark:text-gray-400">Price: ${product.price}</p>
                <div className="flex items-center gap-1.5 pt-1">
                    <span className="text-xs font-bold text-yellow-500 bg-yellow-400/10 px-2 py-0.5 rounded-full">{product.rating} ⭐</span>
                </div>
            </div>
        </div>
    );
}


export const App = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10`);
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        !products.length ? (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        )
    );
}

export default App;
