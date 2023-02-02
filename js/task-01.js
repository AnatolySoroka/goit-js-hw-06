const itemEl = document.querySelectorAll('li.item');
console.log('Number of categories:', itemEl.length);

itemEl.forEach(item => {
    console.log('Category:', item.children[0].textContent);
    console.log('Elements:', item.lastElementChild.children.length)
});