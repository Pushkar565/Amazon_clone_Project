import React from 'react';
import './Subtotal.css';
import { NumericFormat } from 'react-number-format'; // Corrected import
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  return (
    <div className='subtotal'>
      <NumericFormat
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        decimalScale={2}
        fixedDecimalScale={true}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />

      <button onClick={() => navigate('/payment')}>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
