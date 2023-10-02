import {useState} from 'react'
import Searchbar from "../Components/SideBar/Searchbar"
import MenuPosts from "../Components/SideBar/Menu-Posts"
import MenuTags from "../Components/SideBar/Menu-Tags"

const Sidebar = ({handlePostName, setToggleMenu, toggleMenu}) => {
  
  const [filter, setFilter] = useState({
    searchTerm: "",
    technical: true,
    design: true,
    personal: true,
  });
  const [toggleFilters, setToggleFilters] = useState(false);
  

  return (
    <aside className="sidebar">
      <Searchbar
        filter={filter}
        setFilter={setFilter}
        toggleFilters={toggleFilters}
        setToggleFilters={setToggleFilters}
      ></Searchbar>
      {toggleFilters ? (
        <MenuTags filter={filter} setFilter={setFilter} />
      ) : (
        <MenuPosts
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          filter={filter}
          handlePostName={handlePostName}
        />
      )}
    </aside>
  );
}

export default Sidebar