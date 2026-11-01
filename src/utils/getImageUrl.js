// Backend URL from frontend .env file
const BACKEND_URL = "http://localhost:4000"

// Convert relative image path into complete backend image URL
const getImageUrl = (image) => {
  if (!image) return "";

  // If image is already a complete URL, return it
  if (image.startsWith("http")) return image;

  // Example:
  // /uploads/products/image.webp
  // becomes:
  // http://localhost:4000/uploads/products/image.webp
  return `${BACKEND_URL}${image}`;
};

export default getImageUrl