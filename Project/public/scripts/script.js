const items = document.querySelector('.items');

items.addEventListener('click', async (event) => {
    if(event.target.type === 'submit') {
        console.log('sending POST requests');
        const response = await axios.post('http://localhost:9000/cart', {
            itemID: event.target.dispatchEvent,
        });
        console.log(response.data.cart);
    }
});