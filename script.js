const heroesTableDOM = document.querySelector('tr');

fetch('https://api.opendota.com/api/herostats')
    .then(res => res.json())
    .then(data => {
        data.forEach(data => {
            heroesTableDOM.insertAdjacentHTML('afterend',
                `<tr">
                    <td>${data.localized_name}</td>
                    <td>${data.primary_attr}</td>
                    <td>${data.base_agi}</td>
                    <td>${data.base_attack_max}</td>
                    <td>${data.attack_type}</td>
                    <td>${data.move_speed}</td>
                    <td>${data.base_health}</td>
                    <td>${data.roles}</td>
                </tr>`);
        });
    })
    .catch(console.error);
