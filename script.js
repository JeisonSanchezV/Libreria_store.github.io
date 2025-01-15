document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            name: "Producto 1",
            description: "Descripción breve del producto 1.",
            image: "producto1.jpg",
            whatsappLink: "https://wa.me/3115412266?text=¡Hola! 👋 Estoy interesado en comprar el libro *Cien años de Soledad*. 📚 Me encantaría saber más detalles sobre el libro. ¿Podrías ayudarme? 😊 ¡Gracias! 🌟"

        },
        {
            name: "Producto 2",
            description: "Descripción breve del producto 2.",
            image: "producto2.jpg",
            whatsappLink: "https://wa.me/1234567890?text=Estoy interesado en Psicoanalista"
        },
        {
            name: "Producto 3",
            description: "Descripción breve del producto 3.",
            image: "producto3.jpg",
            whatsappLink: "https://wa.me/1234567890?text=Estoy interesado en Producto 3"
        },
        {
            name: "Producto 4",
            description: "Descripción breve del producto 4.",
            image: "producto4.jpg",
            whatsappLink: "https://wa.me/1234567890?text=Estoy interesado en Producto 4"
        },
        {
            name: "Producto 5",
            description: "Descripción breve del producto 5.",
            image: "producto5.jpg",
            whatsappLink: "https://wa.me/1234567890?text=Estoy interesado en Producto 5"
        }
    ];

    const productSection = document.getElementById('productSection');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const buyNowButton = document.createElement('a');
        buyNowButton.href = product.whatsappLink;
        buyNowButton.textContent = 'Comprar ahora';
        buyNowButton.className = 'buy-now';

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productDescription);
        productDiv.appendChild(buyNowButton);

        productSection.appendChild(productDiv);
    });
});
