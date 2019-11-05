import React, {Component} from 'react';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Name Surname',
        address: {
          street: 'Street 100-25',
          postalCode: '123450',
          country: 'Germany'
        },
        email: 'test@test.lt'
      },
      deliveryMethod: 'fastest'
    }
  }

  render () {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="your name"/>
          <input className={classes.Input} type="email" name="email" placeholder="your email"/>
          <input className={classes.Input} type="text" name="street" placeholder="your address"/>
          <input className={classes.Input} type="text" name="postalCode" placeholder="your postalCode"/>
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;