import React from 'react'
//import HeroRow from './HeroRow'

const HeroTable = ({heroes}) => {
  return (
      <div>
          <table className="characters-table">
        <tbody>
          <tr className="character-row">
            <th>Name</th>
            <th>Race</th>
            <th>Age</th>
            <th>Weapon</th>
            <th></th>
          </tr>
          <tr className="character-row">
            <td>Gandalf</td>
            <td>Maia</td>
            <td>2019</td>
            <td>Staff 🏑</td>
            <td>
              <div className="controls">
                <div>☠ Kill</div>
                <div>💍 Use Ring</div>
              </div>
            </td>
          </tr>
          <tr className="character-row">
            <td>Aragorn</td>
            <td>Human</td>
            <td>120</td>
            <td>Sword ⚔</td>
            <td>
              <div className="controls">
                <div>☠ Kill</div>
                <div>💍 Use Ring</div>
              </div>
            </td>
          </tr>
          <tr className="character-row">
            <td>Legolas</td>
            <td>Elf</td>
            <td>200</td>
            <td>Bow 🏹</td>
            <td>
              <div className="controls">
                <div>☠ Kill</div>
                <div>💍 Use Ring</div>
              </div>
            </td>
          </tr>
          <tr className="character-row">
            <td>Gimli</td>
            <td>Dwarf</td>
            <td>139</td>
            <td>Axe ⚒</td>
            <td>
              <div className="controls">
                <div>☠ Kill</div>
                <div>💍 Use Ring</div>
              </div>
            </td>
          </tr>
          <tr className="character-row">
            <td>Frodo</td>
            <td>Hobbit</td>
            <td>33</td>
            <td>Dagger 🗡</td>
            <td>
              <div className="controls">
                <div>☠ Kill</div>
                <div>💍 Use Ring</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
  );
}

export default HeroTable


