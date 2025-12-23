
/* SIZE SELECTION */
document.querySelectorAll('.options button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.options button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

/* COLOR SELECTION */
document.querySelectorAll('.colors span').forEach(color => {
    color.addEventListener('click', () => {
        document.querySelectorAll('.colors span').forEach(c => c.classList.remove('active'));
        color.classList.add('active');
    });
});

/* QUANTITY */
const minusBtn = document.querySelector('.quantity button:first-child');
const plusBtn  = document.querySelector('.quantity button:last-child');
const qtyInput = document.querySelector('.quantity input');

minusBtn.addEventListener('click', () => {
    let value = parseInt(qtyInput.value);
    if (value > 1) qtyInput.value = value - 1;
});

plusBtn.addEventListener('click', () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
});

