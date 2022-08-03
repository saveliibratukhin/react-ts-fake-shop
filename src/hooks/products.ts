import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../models"

export function useProducts() {
    const [products, setProducts] =  useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addProduct (product: IProduct) {
      setProducts([...products, product])
    }
  
    async function fetchProducts() {
      try {      
        setError('')
        setLoading(true)
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
        setProducts(response.data)
        setLoading(false)
      }
      catch (e) {
        setError((e as AxiosError).message)
        setLoading(false)
      }
    }
  
    useEffect(() => {
      fetchProducts()
    }, [])

    return {products, error, loading, addProduct}
}