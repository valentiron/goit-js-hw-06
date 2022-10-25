const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

for (let i = 0; i < items.length; i += 1) {
    const h2ref = items[i].querySelector('h2');
    const liref = items[i].querySelectorAll('li').length;

    
    console.log(`Category: ${h2ref.textContent}`);
    console.log(`Elements: ${liref}`);
}

