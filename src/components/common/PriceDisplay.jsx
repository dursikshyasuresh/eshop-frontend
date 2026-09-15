const PriceDisplay = ({ price, discountPrice }) => {
  const hasDiscount =
    discountPrice != null && discountPrice < price;

  return (
    <div className="flex items-center gap-2 pt-1">
      {hasDiscount ? (
        <>
          {/* Discounted Price */}
          <span className="text-lg font-bold text-foreground">
            ${discountPrice}
          </span>

          {/* Original Price */}
          <span className="text-sm text-muted-foreground line-through">
            ${price}
          </span>
        </>
      ) : (
        /* Normal Price */
        <span className="text-lg font-bold text-foreground">
          ${price}
        </span>
      )}
    </div>
  );
};

export default PriceDisplay;