import Button from '../../ui/Button';
// eslint-disable-next-line
export default function UpdateItemQuantity({ pizzaId }) {
  return (
    <div>
      <Button type="round">-</Button>
      <Button type="round">+</Button>
    </div>
  );
}
