/**
 * function input error template
 * @param {String} msg
 */

function inputErrorTemplate(msg) {
  return `<div class="invalid-feedback">${msg}</div>`;
}

/**
 * function show input error, add input error
 * @param {HTMLInputElement} el
 */

export function showInputError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || 'Invalid input';
  const template = inputErrorTemplate(msg);
  el.classList.add('is-invalid');
  parent.insertAdjacentHTML('beforeend', template)
}

/**
 * function remove input error
 * @param{HTMLInputElement} el
 */
export function removeInputError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector('.invalid-feedback')
  if(!err) return
  el.classList.remove('is-invalid')
  parent.removeChild(err)
}
