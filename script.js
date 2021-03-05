const totalStorageContainer = $('[data-max-value]');
const valueProgressbarContainer = $('.progressbar .value');
const usedStorageContainer = $('[data-used]');
const remainingStorageContainer = $('.remaining-storage .number');
const total = 1000;
const used = 500;
const remaining = total - used;

function $(element) {
  return document.querySelector(element);
}

totalStorageContainer.innerText = total + ' GB';
usedStorageContainer.innerText = total;

let updater = setInterval(updateValues, 1);
let value = total;

function updateValues() {
  if (value === used) {
    clearInterval(updater);
    return;
  }

  value--;

  const percentage = (value / total) * 100;

  usedStorageContainer.innerText = value;
  remainingStorageContainer.innerText = total - value;
  valueProgressbarContainer.style.width = percentage + '%';
}
