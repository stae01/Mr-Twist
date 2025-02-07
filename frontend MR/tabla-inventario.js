document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const description = document.getElementById('description').value;

    const total = price * quantity;

    const table = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();

    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = `$${price.toFixed(2)}`;
    row.insertCell(2).textContent = quantity;
    row.insertCell(3).textContent = description;
    row.insertCell(4).textContent = `$${total.toFixed(2)}`;  

    const actionsCell = row.insertCell(5);
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.className = 'edit-btn';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.className = 'delete-btn';
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);


    updateTotal();

    document.getElementById('product-form').reset();
});

function updateTotal() {
    const table = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    let totalQuantity = 0;
    let totalPrice = 0;

    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        const quantity = parseInt(row.cells[2].textContent);
        const price = parseFloat(row.cells[1].textContent.replace('$', ''));
        const productTotal = parseFloat(row.cells[4].textContent.replace('$', ''));

        totalQuantity += quantity;
        totalPrice += productTotal;
    }

    document.getElementById('total-quantity').textContent = totalQuantity;
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
}
