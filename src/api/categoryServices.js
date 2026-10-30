import { useQuery } from "@tanstack/react-query";
import apiRequest from "../utils/apiRequest";

// fetching all categories
export const useCategories = () => {
    return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await apiRequest.get("/categories")
      return response.data
    }
  })
}