import { useState } from "react";
import { Checkbox, CheckboxActive } from "../../constants/images";

const Tag = ({ item, filter, setFilter }) => {
  const [toggleCheckmark, setToggleCheckmark] = useState(false);

  function handleCheckbox() {
    setToggleCheckmark(!toggleCheckmark);
    setFilter({ ...filter, [item]: !filter[item] });
  }

  return (
    <li className="tag">
      <div className="tag__checkbox" onClick={handleCheckbox}>
        {(filter[item]) ? CheckboxActive : Checkbox}
      </div>
      <div className="tag__name">
        <p>{item}</p>
      </div>
    </li>
  );
};

const MenuTags = ({ filter, setFilter }) => {
  
  return (
    <div className="sidebar__tags">
      <ul className="siderbar__tags-list">
        <Tag filter={filter} setFilter={setFilter} item={"personal"} />
        <Tag filter={filter} setFilter={setFilter} item={"technical"} />
        <Tag filter={filter} setFilter={setFilter} item={"design"} />
      </ul>
    </div>
  );
};

export default MenuTags;
