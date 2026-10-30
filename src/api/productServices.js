import { useQuery } from "@tanstack/react-query";
import apiRequest from "../utils/apiRequest";

// fetching all products
export const useProducts = ({
  limit = 10
}) => {
    return useQuery({
    queryKey: ["products",limit],
    queryFn: async () => {
      const response = await apiRequest.get("/products",{
        params:{
          limit
        }
      })
      return response.data
    }
  })
}


// fetching single product
export const useProduct = (id) => {
    return useQuery({
    queryKey: ["product",id],
    queryFn: async () => {
      const response = await apiRequest.get(`/product/${id}`)
      return response.data.product
    }
  })
}