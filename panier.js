const items = { ...localStorage };
// console.log(items);

function wrap(element, wrapper) {
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
}

Object.keys(items).forEach(item => {
    const loadTeddy = async () => {
        const teddyId = item
        const urlRequest = 'http://localhost:3000/api/teddies/' + teddyId;
        const response = await fetch(urlRequest);
        const teddy = await response.json();
        console.log(teddy);
        //Title
        var title = document.createElement("h2");
        title.class = "title";
        var titleText = document.createTextNode(teddy.name);
        title.appendChild(titleText);
        //Picture
        var img = document.createElement("img");
        img.setAttribute("src", teddy.imageUrl);
        img.class = "img";
        //Description
        var description = document.createElement("p");
        var descriptionText = document.createTextNode(teddy.description);
        description.class = "description";
        description.appendChild(descriptionText);
        //Price
        var price = document.createElement("strong");
        var priceText = document.createTextNode(teddy.price);
        price.class = "price";
        price.appendChild(priceText);
        //Link
        var link = document.createElement("a");
        var linkText = document.createTextNode(teddy.name);
        link.appendChild(linkText);
        var teddyUrl = teddy._id
        var linkPath = "./productDetail.html" + "?" + teddyUrl;
        link.setAttribute("href", linkPath);
        //Insert elements
        var element = document.getElementById("content");
        element.appendChild(title);
        wrap(title, link)
        element.appendChild(img);
        element.appendChild(description);
        element.appendChild(price)
        element.appendChild(link);
    }
    loadTeddy();
});
