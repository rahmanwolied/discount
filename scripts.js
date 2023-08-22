const products = document.getElementsByClassName('product-card');
const cartList = document.getElementById('cart');
const totalPriceElement = document.getElementById('total_price');
const discoutButton = document.getElementById('discount_btn');
const makePurchaseButton = document.getElementById('make_purchase');
const Total = document.getElementById('total');
const discountElement = document.getElementById('discount');
let discount = 0;
let total = 0;

for (const product of products) {
	const titleElement = product.querySelector('.card-title');
	const priceElement = product.querySelector('.items-center p');

	const title = titleElement.textContent.trim();
	const priceText = priceElement.textContent.trim();
	const price = parseFloat(priceText.replace('TK', '').trim());

	product.addEventListener('click', function () {
		const cartItem = document.createElement('li');
		cartItem.textContent = title;
		cartList.appendChild(cartItem);
		total += price;
		totalPriceElement.textContent = total.toFixed(2) + ' TK';
		if (total > 0) {
			makePurchaseButton.removeAttribute('disabled');
		}
		if (total >= 200) {
			discoutButton.removeAttribute('disabled');
			discount = total * 0.2;
			discountElement.textContent = discount.toFixed(2) + ' TK';
			total = total - discount;
		}
		Total.textContent = total.toFixed(2) + ' TK';
	});
}
