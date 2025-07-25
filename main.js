import { tableHeadData } from "./data/tableHeadData.js";
import { rolesData } from "./data/rolesData.js";
import { attributeData } from "./data/attributeData.js";

export function main() {

  let attributes = '';

  for (const attribute of attributeData) {
    attributes += `
    <option value="${attribute}">${attribute}</option>
    `
  }

  let roles = '';

  for (const role of rolesData) {
    roles += `
    <option value="${role}">${role}</option>
    `
  }

  let tableHead = '';

  for (const head of tableHeadData) {
    tableHead += `
    <th>${head}</th>
    `;
  }

  const HTML = `
    <h1>Dota2 heroes</h1>
    <form class="sort">
      <div id="attribute">
        <label for="attribute">Attribute</label>
        <select name="attribute" id="attribute">
          <option value="0">Select attribute</option>
          ${attributes}
        </select>
      </div>
      <div id="attack-type">
        <label for="attackType">Attack type</label>
        <select name="attackType" id="attackType">
          <option value="0">Select attack type</option>
          <option value="melee">Melee</option>
          <option value="ranged">Ranged</option>
        </select>
      </div>
      <div id="role">
        <label for="role">Role</label>
        <select name="role" id="role">
          <option value="0">Select role</option>
          ${roles}
        </select>
      </div>
    </form>
    <div id="heroes">
      <table>
        <thead>
          <tr>
            ${tableHead}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    `
  document
    .getElementById('app')
    .insertAdjacentHTML('beforeend', HTML);
}

main();