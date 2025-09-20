import { formatCurrency } from '../../utils/helpers';
// eslint-disable-next-line
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  // eslint-disable-next-line
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name} order
          Item{' '}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-slate-500">
        {/* eslint-disable-next-line */}
        {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
