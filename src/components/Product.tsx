import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false)

    const bnClassName = details ?  'bg-blue-400' : 'bg-yellow-400'
    const bnClasses = ['py-2 px-4 border', bnClassName]
    
    return (
        <div 
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={product.image} className="w-1/6" alt={`${product.title}`}/>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button 
                className={bnClasses.join(' ')}
                onClick={() => {
                    setDetails(prev => !prev)
                }}
            >
                {details? 'Hide details' : 'Show details'}
            </button>

            
            {details && <div>
                    <p>{product.description}</p>
                    <p>Rate: <span style={{ fontWeight: 'bold' }}>{product.rating?.rate}</span></p>
                </div>}
        </div>
    )
}