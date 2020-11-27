import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Dropdownfilter = ({setStatus}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const statusHandler = (e) => {
    setStatus(e.target.value);
}

  return (
    <Dropdown  onChange={statusHandler} name="todos" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Filter todos
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem value="all">All todos</DropdownItem>
        <DropdownItem value="completed">Done</DropdownItem>
        <DropdownItem value="uncompleted">Not done</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Dropdownfilter;