import { memo } from "react";

function ProductRow({ product, onToggleFavorite }) {
  console.log("Row render:", product.name);

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => onToggleFavorite(product.id)}>
          {product.favorite ? "★" : "☆"}
        </button>
      </td>
    </tr>
  );
}

export default memo(ProductRow);
