document.getElementById('merma-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const reason = document.getElementById('reason').value;

    const total = price * quantity;

    const table = document.getElementById('merma-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();

    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = `$${price.toFixed(2)}`;
    row.insertCell(2).textContent = quantity;
    row.insertCell(3).textContent = reason;
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

    document.getElementById('merma-form').reset();
});

document.getElementById('merma-table').addEventListener('click', function(e) {
    if (e.target && e.target.matches('button.delete-btn')) {
        const row = e.target.closest('tr');
        row.remove();
    }
});

document.getElementById('merma-table').addEventListener('click', function(e) {
    if (e.target && e.target.matches('button.edit-btn')) {
        const row = e.target.closest('tr');
        const cells = row.getElementsByTagName('td');

        document.getElementById('name').value = cells[0].textContent;
        document.getElementById('price').value = parseFloat(cells[1].textContent.replace('$', ''));
        document.getElementById('quantity').value = parseInt(cells[2].textContent);
        document.getElementById('reason').value = cells[3].textContent;

        row.remove();
    }
});
