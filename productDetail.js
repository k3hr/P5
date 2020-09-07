function storeChoice(teddy,color) {
    window.localStorage.setItem(teddy, color);
}

const loadTeddy = async () => {
    const teddyId = window.location.search;
    const teddyIdClean = teddyId.replace("?", "");
    const urlRequest = 'http://localhost:3000/api/teddies/' + teddyIdClean;
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
    //Select color
    // var selectColor = document.createElement("select");
    // teddy.colors.forEach(color => {
    //     selectColor.add(color);
    // });
    //Button
    var button = document.createElement("input");
    button.type = 'button';
    button.onClick = storeChoice(teddy._id, "green");
    //Insert elements
    var element = document.getElementById("content");
    element.appendChild(title);
    element.appendChild(img);
    element.appendChild(description);
    element.appendChild(price)  
    element.appendChild(button);

}

loadTeddy();
