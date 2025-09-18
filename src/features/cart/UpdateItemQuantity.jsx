import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
// eslint-disable-next-line
export default function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch()}>
        -
      </Button>
      <Button type="round" onClick={() => dispatch()}>
        +
      </Button>
    </div>
  );
}
