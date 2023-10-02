import { Search, Filter} from '../../constants/images'

const Searchbar = ({ toggleFilters , setToggleFilters, filter, setFilter}) => {

  function handleFilters(){
    setToggleFilters(!toggleFilters)
  }

  function handleSearchTerm(e){
    setFilter({...filter, searchTerm: e.target.value.toLowerCase()})
  }


  return (
    <div aria-label='search bar' className='searchbar'>
      <div title='SEARCH' className='searchbar__search'>
        <input onChange={handleSearchTerm} type="text" />
        <i>{Search}</i>
      </div>

      <div title='FILTER' className={toggleFilters? 'searchbar__filter-active': 'searchbar__filter'}>
        <button onClick={handleFilters}>{Filter}</button>
      </div>
    </div>
  )
}

export default Searchbar