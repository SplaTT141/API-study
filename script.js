const heroesTableDOM = document.querySelector('tbody');
const titleDOM = document.querySelector('h1');

fetch('https://api.opendota.com/api/herostats')
    .then(res => res.json())
    .then(data => {
        data.forEach(data => {
            console.log(data);
            const name = data.localized_name;
            let attribute = data.primary_attr;
            let baseAttributePoints = '';
            const baseAttack = (data.base_attack_max + data.base_attack_min) / 2;

            if (attribute === 'agi') {
                attribute = 'Agility';
                baseAttributePoints = data.base_agi;
            } else if (attribute === 'str') {
                attribute = 'Strength'
                baseAttributePoints = data.base_str;
            } else if (attribute === 'int') {
                attribute = 'Intelligence'
                baseAttributePoints = data.base_int;
            } else {
                attribute = 'Universal';
                baseAttributePoints = `Avg ${((data.base_agi + data.base_str + data.base_int) / 2)}`
            }

            heroesTableDOM.insertAdjacentHTML('afterbegin',
                `<tr>
                    <td>${name}</td>
                    <td>${attribute}</td>
                    <td>${baseAttributePoints}</td>
                    <td>${baseAttack}</td>
                    <td>${data.attack_type}</td>
                    <td>${data.move_speed}</td>
                    <td>${data.base_health}</td>
                    <td>${data.roles}</td>
                </tr>`);
        });
    })
    .catch(console.error);
