// src/utils/pricing.js
export const getDiscountInfo = (price, discountPrice) => {
  const hasDiscount =
    discountPrice != null && price > 0 && discountPrice < price;

  return {
    hasDiscount,
    discountPercent: hasDiscount
      ? Math.round(((price - discountPrice) / price) * 100)
      : 0,
    finalPrice: hasDiscount ? discountPrice : price,
  };
};