//for CSS
const inputName = document.querySelectorAll('label');
inputName.forEach(inputName => inputName.classList.add('input-name'));

const textArea = document.querySelector('textarea');
textArea.addEventListener('input', () => {
  textArea.style.height = '80px';
  textArea.style.height = `${textArea.scrollHeight}px`;
});
//------------------------------------------------------------------------------------------------------------

const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    email.value = formData.email || '';
    message.value = formData.message || '';
  } catch (e) {
    console.error('Error reading from storage', e);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (email.trim() === '' || message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('Sended:', formData);

  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
