'use strict';
let clients = []; // Масив для зберігання інформації про клієнтів

function recordClient() {
    // Отримуємо дані з полів введення
    const clientName = document.getElementById('clientName').value;
    const serviceTime = document.getElementById('serviceTime').value;
    const serviceCost = document.getElementById('serviceCost').value;

    // Створимо об'єкт клієнта
    const client = {
        name: clientName,
        time: serviceTime,
        cost: serviceCost,
    };

    // Додаємо клієнта до масиву
    clients.push(client);

    // Очищаємо поля введення
    document.getElementById('clientName').value = '';
    document.getElementById('serviceTime').value = '';
    document.getElementById('serviceCost').value = '';

    // Відображаємо список клієнтів
    displayClients();
}

function displayClients() {
    const clientsList = document.getElementById('clientsList');
    clientsList.innerHTML = ''; // Очищаємо список перед відображенням нових даних

    clients.forEach((client) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${client.name} - ${client.time} хв. - ${client.cost} грн.`;
        clientsList.appendChild(listItem);
    });
}
    
