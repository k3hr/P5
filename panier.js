const items = { ...localStorage };
console.log(items);

// items.forEach(item => {
//     const loadTeddy = async () => {
//         const teddyId = item.key
//         const urlRequest = 'http://localhost:3000/api/teddies/' + teddyId;
//         const response = await fetch(urlRequest);
//         const teddy = await response.json();
//         console.log(teddy);
//     }
// });
