import { Component } from 'react';
import { PaymentMethods } from 'components/PaymentMethods/PaymentMethods';
import { Container } from './PaymentWidget.styled';
import { paymentMethods } from 'constants';

export class PaymentWidget extends Component {
  state = {
    selectedMethod: null,
  };

  selectPaymentMethod = (method) => {
    this.setState({
      selectedMethod: method,
    });
  };

  render() {
    const { selectedMethod } = this.state;

    return (
      <Container>
        <PaymentMethods
          selected={selectedMethod}
          onSelect={this.selectPaymentMethod}
        />
        <hr />
        {selectedMethod === paymentMethods.visa && <div>Visa form</div>}
        {selectedMethod === paymentMethods.mastercard && (
          <div>Mastercard form</div>
        )}
        {selectedMethod === paymentMethods.applepay && (
          <div>Apple Pay form</div>
        )}
      </Container>
    );
  }
}
