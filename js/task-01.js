const itemEl = document.querySelectorAll('li.item');
console.log('Number of categories:', itemEl.length);

console.log('Category:', itemEl[0].children[0].innerHTML)
console.log('Elements:', itemEl[0].children[1].children.length)

console.log('Category:', itemEl[1].children[0].innerHTML)
console.log('Elements:', itemEl[1].children[1].children.length)

console.log('Category:', itemEl[2].children[0].innerHTML)
console.log('Elements:', itemEl[2].children[1].children.length)