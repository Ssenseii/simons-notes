import PostList from "../../constants/post-data";
import { Link } from "react-router-dom";

const MenuPosts = ({ handlePostName, filter, toggleMenu, setToggleMenu }) => {
    /// if all are false, show all posts
    const showAllPosts = !Object.values(filter).some((tag) => tag);

    /// First Filter By Tags
    const tagFilteredList = PostList.filter((element) => {
        const selectedTags = [
            filter.technical && "t",
            filter.design && "d",
            filter.personal && "p",
        ].filter((tag) => tag);

        return showAllPosts || selectedTags.some((tag) => element.tag === tag);
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
            {searchFilteredList.toReversed().map((Post, i) => {
                return (
                    <Link key={i} to={Post.id === 0? '/' : `post${Post.id}`}>
                        <li
                            key={i}
                            title={`${Post.title}`}
                            onClick={() => {
                                handlePostName("Post" + Post.id);
                                if (window.innerWidth <= 768) {
                                    setToggleMenu(!toggleMenu);
                                }
                            }}
                        >
                            {Post.date + ": " + Post.title}
                        </li>
                    </Link>
                );
            })}
        </ul>

    );
};

export default MenuPosts;
