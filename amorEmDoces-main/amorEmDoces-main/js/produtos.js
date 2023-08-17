const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item')
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', (e) => {
        e.preventDefault();
        const isLeft = control.classList.contains('arrow-left');
        if (isLeft) {
            currentItem -= 1
        } else {
            currentItem += 1
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        items.forEach(item => item.classList.remove('current-item'));
        items[currentItem].scrollIntoView({
            block: "center",
            behavior: "smooth"
        });

        items[currentItem].classList.add('current-item')
    })
})

const controls2 = document.querySelectorAll('.control2');
let currentItem2 = 0;
const items2 = document.querySelectorAll('.item2')
const maxItems2 = items.length;

controls2.forEach(control2 => {
    control2.addEventListener('click', (e) => {
        e.preventDefault();
        const isLeft2 = control2.classList.contains('arrow-left2');
        if (isLeft2) {
            currentItem2 -= 1
        } else {
            currentItem2 += 1
        }

        if (currentItem2 >= maxItems) {
            currentItem2 = 0;
        }
        if (currentItem2 < 0) {
            currentItem2 = maxItems - 1;
        }

        //items2.forEach(item => item.classList.remove('current-item2'));
        items2[currentItem2].scrollIntoView({
            block: "center",
            behavior: "smooth"
        });

        //items2[currentItem2].classList.add('current-item2')
    })
})