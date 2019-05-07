import React, {Component} from 'react';
import TableFilter from './components/TableFilter';
import './App.css';
import HeroTable from './components/HeroTable';

const heroes = [
  { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
  { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔' },
  { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
  { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },
  { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡' }
]


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      filterText: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)

  }

  handleInputChange (e) {
    this.state ({
      filterText : e.target.value
    })
  }

  render() {

    const {filterText} = this.state

    let filteredHeroes = heroes

    if (filterText) {
      filteredHeroes = filteredHeroes.filter(hero => {
        return hero.name.includes(filterText)
      })
    }


    return (
      <div className="index">
          <h2>Fellowship of the Ring</h2>
        <div className="container" />
        <TableFilter 
          filterText = { filterText }
          handleChange = { this.handleInputChange }  
          placeHolder = 'search hero...'
        />
        
        {filteredHeroes.length > 0 && <HeroTable heroes={filteredHeroes} /> }

        {filteredHeroes.length === 0 && <div>No heroes....</div> }

      </div>
    );
  }
}
