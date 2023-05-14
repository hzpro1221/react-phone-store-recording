import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../context'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Carts extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if (cart.length > 0) {
              return (
                <>
                <Title name='Your' title='Cart'></Title>
                <CartColumns></CartColumns>
                <CartList value={value}></CartList>
                <CartTotal value={value}></CartTotal>
                </>
              );
            } else {
              return <EmptyCart></EmptyCart>;
            } 
          }}
        </ProductConsumer>
      </section>
    )
  }
}
