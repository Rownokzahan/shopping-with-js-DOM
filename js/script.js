let count = 1;

document.getElementById('item-list').addEventListener('click', function (event) {

    // capturing the Buy Now buttons using its classes
    if (!event.target.classList.contains('btn', 'btn-primary')) {
        return;
    }

    productInfo = event.target.parentNode.parentNode.childNodes;
    const name = productInfo[1].innerText;
    const price = parseInt(productInfo[3].childNodes[1].innerText);
    const quantity = parseInt(productInfo[7].childNodes[1].value);

    if (quantity < 0 || isNaN(quantity)) {
        // show invalid message
        productInfo[7].childNodes[1].classList.add('outline-red-500');
        productInfo[7].childNodes[4].classList.remove('hidden');
        return;
    }

    const row = document.createElement('tr');
    row.innerHTML =
        `<th>${count}</th>
            <td>${name}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <td>${price * quantity}</td>`

    document.getElementById('calculation-info').appendChild(row);

    // disable buy now button
    event.target.setAttribute('disabled', true);

    count++;
});