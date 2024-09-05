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
    //Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.appendChild(statusMessage);
        
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });
            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });
        });
   }
//////////////
fetch('db.json')
  .then(data=>data.json())
  .then(res=>console.log(res)); 