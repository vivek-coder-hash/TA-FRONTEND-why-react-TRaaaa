let input = document.querySelector('.input');
let ui = document.querySelector('ul');
let arr = JSON.parse(localStorage.getItem('arr')) || [];

function isHandleWatch(event) {
  let index = +event.target.classList.value;
  arr[index].isWatch = !arr[index].isWatch;
  localStorage.setItem('arr', JSON.stringify(arr));
  createUi(arr);
}

let elm = React.createElement;

function createUi(arr) {
  //ui.innerHTML = '';
  let UI = arr.map((element, index) => {
    let li = elm(
      'li',
      { className: 'flex justify-between align-center' },
      elm('p', {}, element.name),
      elm(
        'button',
        { className: `${index}`, onClick: isHandleWatch },
        element.isWatch ? 'Watched' : 'To Watch'
      )
    );
    //  li.classList = 'flex justify-between align-center';
    //let p = elm('p');
    // let button = elm('button');
    //  button.classList.add(`${index}`);
    //button.innerText = element.isWatch ? 'Watched' : 'To Watch';
    // p.innerText = element.name;
    //  li.append(p, button);
    //  ui.append(li);
    return li;

    // button.addEventListener('click', isHandleWatch);
  });
  ReactDOM.render(UI, ui);
}

input.addEventListener('keyup', (event) => {
  let value = event.target.value;
  if (event.keyCode === 13 && value) {
    arr.push({ name: value, isWatch: false });
    localStorage.setItem('arr', JSON.stringify(arr));
    createUi(arr);
    event.target.value = '';
  }
});

createUi(arr);
