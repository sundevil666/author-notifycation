import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './sevise/auth.service';
import { notify } from './views/notification';

const { form, inputEmail, inputPassword } = UI
const inputs = [inputEmail, inputPassword]

form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
});

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)))
async function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el)
    removeInputError(el)
    if(!isValidInput) {
      showInputError(el)
    }
  })
  if(isValidForm) return

  try {
    await login(inputEmail.value, inputPassword.value)
    notify({ msg: 'Login success', className: 'alert-success' })
    form.reset();
  } catch (err) {
    notify({ msg: 'Login error', className: 'alert-danger' })
    console.log('err', err);
  }

}
