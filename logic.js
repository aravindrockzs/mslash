const html = document.querySelector('html');

//div for showing result
const result = document.createElement('div');
result.classList.add('mslash');

result.addEventListener('click', (e) => {
  if (e.target.classList.contains('link')) {
    // const htmlContent = document.querySelector('.editable').innerHTML;

    result.remove();
    const htmlContent = document.querySelector('.editable').innerHTML;

    document.querySelector('.editable').innerHTML =
      htmlContent.substring(0, htmlContent.length - 2) +
      '<a class="link" href="#"> m/ </a>';
  }
});

// link
// const link=`<a href="${desiredLink}">${desiredText}</a>`

result.insertAdjacentHTML('afterbegin', '<a class="link" href="#">link</a>');

const handleTypeEvent = function (el) {
  el.addEventListener('input', () => {
    if (el.textContent.substr(-2) === 'm/') {
      console.log('working');

      el.appendChild(result);
    } else {
      console.log(el.children);
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
