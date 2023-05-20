import { ShopList } from './ShopList/index.js'

const mainElm = document.querySelector('main')

fetch('https://nakupy.kodim.app/api/sampleweek/mon')
  .then((response) => response.json())
  .then((data) => {
    mainElm.innerHTML += ShopList({
      dayName: data.result.dayName,
      items: data.result.items
    })
  });

fetch('https://nakupy.kodim.app/api/sampleweek/tue')
  .then((response) => response.json())
  .then((data) => {
    mainElm.innerHTML += ShopList({
      dayName: data.result.dayName,
      items: data.result.items
    })
  });