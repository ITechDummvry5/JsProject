
/* SIZE SELECTION */
document.querySelectorAll('.options button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.options button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

/* COLOR SELECTION + IMAGE CHANGE */
const productImg = document.getElementById('productImg');
const colors = document.querySelectorAll('.colors span');

colors.forEach(color => {
    color.addEventListener('click', () => {

        // Active class
        colors.forEach(c => c.classList.remove('active'));
        color.classList.add('active');

        // Change image
        const newImage = color.getAttribute('data-image');
        productImg.src = newImage;
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


const basePrice = 14.00;
const priceEl = document.getElementById('price');
const couponSelect = document.getElementById('couponSelect');
const discountText = document.getElementById('discountText');

couponSelect.addEventListener('change', () => {
    const discount = parseInt(couponSelect.value);
    let finalPrice = basePrice;

    if (discount > 0) {
        finalPrice = basePrice - (basePrice * discount / 100);
        discountText.textContent = `(${discount}% OFF)`;
    } else {
        discountText.textContent = '';
    }

    priceEl.textContent = finalPrice.toFixed(2);
});
