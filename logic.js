const html = document.querySelector('html');

//div for showing result
const result = document.createElement('div');
result.classList.add('mslash');
console.log(result);

const handleTypeEvent = function (el) {
  el.addEventListener('input', () => {
    if (el.textContent.substr(-2) === 'm/') {
      console.log('working');

      el.appendChild(result);
    } else {
      el.removeChild(result);
    }
    el.removeEventListener('input', () => {});
  });
};

html.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('editable')) {
    handleTypeEvent(el);
    console.log(el);
  }
  html.removeEventListener('click', () => {});
});
