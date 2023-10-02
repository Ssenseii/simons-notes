import PostList from "../../constants/post-data";

const MenuPosts = ({ handlePostName, filter, toggleMenu, setToggleMenu }) => {

  /// First Filter By Tags
  const tagFilteredList = PostList.filter((element) => {
    const selectedTags = [
      filter.technical && "technical",
      filter.design && "design",
      filter.personal && "personal",
    ].filter((tag) => tag);

    return selectedTags.some((tag) => element.tag === tag);
  });

  /// Then filter by search term
  const searchFilteredList = tagFilteredList.filter((element) => {
    if (filter.searchTerm === "" || undefined) {
      return element;
    } else {
      return (
        element.title.toLowerCase().includes(filter.searchTerm) ||
        element.date.includes(filter.searchTerm)
      );
    }
  });

  return (
    <ul className="sidebar__menu">
      {searchFilteredList.map((Post, i) => {
        return (
          <li
            key={i}
            title={`${Post.title}`}
            onClick={() => {
              handlePostName("Post" + Post.id);
              if(window.innerWidth <= 768){
                setToggleMenu(!toggleMenu);
              }
            }}
          >
            {Post.date + ": " + Post.title}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuPosts;
