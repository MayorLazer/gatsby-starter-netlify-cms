var mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment_data = {
  transaction_amount: 178,
  token: token,
  description: 'Sleek Marble Shirt',
  installments: installments,
  payment_method_id: payment_method_id,
  issuer_id: issuer_id,
  payer: {
    email: 'nick@hotmail.com'
  }
};

// Guarda y postea el pago
mercadopago.payment.save(payment).then(function (data) {
  // ...    
  // Imprime el estado del pago
  Console.log(payment.status);
}).catch(function (error) {
  // ...
});
