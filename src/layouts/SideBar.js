import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      <Menu pointing vertical >
        <Menu.Item icon="user" name="Job Seekers" />
        <Menu.Item icon="users" name="System Staff" />
        <Menu.Item icon="building outline" name="Employers" />
        <Menu.Item icon="list" name="Job Positions" />
        <Menu.Item icon="bullhorn" name="Job Advertisements" />
      </Menu>
    </div>
  );
}
