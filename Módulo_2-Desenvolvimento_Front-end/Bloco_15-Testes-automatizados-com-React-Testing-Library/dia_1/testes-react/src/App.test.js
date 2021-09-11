// modifique o import abaixo
import { render, fireEvent } from '@testing-library/react';
import App from './App';
// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';
  const inputEmail = getByLabelText(/email/i);
  const btnSend = getByTestId('id-send');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});

test('Verifica se renderiza o Valor, caso não clique no botão', () =>{
  const { queryByText } = render(<App />);
  const valor = queryByText(/valor/i)
  expect(valor).not.toBeInTheDocument();

})