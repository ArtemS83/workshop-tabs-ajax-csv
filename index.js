console.log('Hello Parcel');
refs = {
  controls: document.querySelector('#tabs-1 [data-controls]'),
  panes: document.querySelector('#tabs-1 [data-panes]'),
};
// console.log(refs);
refs.controls.addEventListener('click', onControlsClick);
function onControlsClick(e) {
  e.preventDefault();
  //   console.log(e.target);
  if (e.target.nodeName !== 'A') {
    renurn;
  }
  const currentControlItem = refs.controls.querySelector(
    '.controls__item--active',
  );
  if (currentControlItem) {
    currentControlItem.classList.remove('controls__item--active');
    const paneId = currentControlItem.getAttribute('href').slice(1);
    const pane = refs.panes.querySelector(`#${paneId}`);
    //   console.log(pane);
    pane.classList.remove('pane--active');
  }
  const controlItem = e.target;
  controlItem.classList.add('controls__item--active');
  //   console.dir(controlItem.hash.slice(1));
  // console.log(controlItem.getAttribute('href').slice(1));
  const paneId = controlItem.getAttribute('href').slice(1);
  const pane = refs.panes.querySelector(`#${paneId}`);
  //   console.log(pane);
  pane.classList.add('pane--active');
}
