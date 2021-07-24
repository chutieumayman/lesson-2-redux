import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart'
import * as Message from './../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import {actRemoveProductCart,actChangeMessage,actUpdateProductCart} from './../actions/index';


class CartContainer extends Component {

  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
  showCartItem = (cart) => {
    var {onDeleteProductInCart, onChangeMessage,onUpdateProductCart}= this.props;
    var result =<tr><td>{Message.MSG_CART_EMPTY}</td></tr> ;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart= {onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateProductCart={onUpdateProductCart}
          />
        )
      });
    }
    return result;
  }

  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      return result= <CartResult cart= {cart} />;
    }
    return  result;
  }
}


CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired
  })
  ).isRequired
}

const mapStateToProps = sate => {
  return {
    cart: sate.cart
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    onDeleteProductInCart : (product)=>{
        dispatch(actRemoveProductCart(product))
      },
      onChangeMessage : (message) =>{
        dispatch(actChangeMessage(message))

      },
      onUpdateProductCart : (product,quantity)=>{
        dispatch(actUpdateProductCart(product,quantity))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
