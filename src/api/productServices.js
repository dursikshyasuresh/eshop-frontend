import { useQuery, keepPreviousData } from "@tanstack/react-query"
import apiRequest from "../utils/apiRequest"

// fetching all products
export const useProducts = ({ limit, isNewArrival,search } = {}) => {
  const filters = { limit, isNewArrival, search }

  return useQuery({
    queryKey: ["products", filters],
    queryFn: async () => {
      const response = await apiRequest.get("/products", {
        params: filters,
      })
      return response.data
    },
    placeholderData: keepPreviousData,
  })
}

// fetching single product
export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await apiRequest.get(`/product/${id}`)
      return response.data.product
    },
    enabled: !!id, // Only fetch when product ID exists
  })
}

// fetching related products
export const useRelatedProducts = (id) => {
  return useQuery({
    queryKey: ["related-product", id],
    queryFn: async () => {
      const response = await apiRequest.get(`/product/${id}/related`)
      return response.data.products
    },
    enabled: !!id, // Only fetch when product ID exists
  })
}
