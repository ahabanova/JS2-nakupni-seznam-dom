//komponenta (lepší pojmenovat s velkým písmenem, dělá se tam v reactu)
//props je vždy objekt s nějakými vlastnostmi

export const ListItem = (props) => {
  const { product, amount, unit, done } = props

  let tickClass = '';
  if (done) {
    tickClass = ' btn-tick--on';
  }

  return `
      <div class="list-item">
        <button class="icon-btn btn-tick${tickClass}"></button>
        <div class="list-item__body">
          <div class="list-item__product">${product}</div>
          <div class="list-item__amount">${amount} ${unit}</div>
        </div>
      </div>
    `
}