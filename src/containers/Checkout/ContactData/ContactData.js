import React, {Component} from 'react';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

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
        name: 'Name',
        address: {
          street: 'Street 100-24',
          zipCode: '12455',
          country: 'Lithuania'
        },
      email: 'email@email.lt'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      });
  }

  render () {
    let form = (<form>
        <input className={classes.Input} type="text" name="name" placeholder="your name"/>
        <input className={classes.Input} type="email" name="email" placeholder="your email"/>
        <input className={classes.Input} type="text" name="street" placeholder="your address"/>
        <input className={classes.Input} type="text" name="postalCode" placeholder="your postalCode"/>
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;