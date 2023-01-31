const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

render(PRODUCTS);

document.getElementById('search').oninput = function () {
    var newValue = PRODUCTS.filter(prodcut => prodcut.name.toLowerCase().includes(this.value.toLowerCase()));
    render(newValue);
    filterProduct();

}
var table = document.getElementById('table');

function render(prodcuts) {
    var cmpCategory = '';
    var content = ` <tr>
                        <th> Name </th > <th> Price </th>
                    </tr>`;

    prodcuts.forEach((prodcut) => {
        if (cmpCategory != prodcut.category) {
            cmpCategory = prodcut.category;
            content += `<tr style="color: blue; background-color: pink">
                            <td colspan=2>${cmpCategory} </td>
                        </tr>`;
        }
        content += `<tr style="${!prodcut.stocked ? 'color: red' : ''} " ${!prodcut.stocked ? 'class="notinstock"' : ""}> 
                    <td> ${prodcut.name} </td>
                    <td> ${prodcut.price} </td>
                </tr>`
    })
    document.getElementById('table').innerHTML = content;
}


const checkbox = document.getElementById('myCheckbox');

function filterProduct(){
    var elx = document.getElementsByClassName('notinstock');
    if (checkbox.checked) {

        for (i = 0; i < elx.length; i++) {
            elx[i].hidden = true;
        }

    }
    else {

        for (i = 0; i < elx.length; i++) {
            elx[i].hidden = false;
        }
    }

}
