import React, { Component } from "react";
import { Menu, Icon, Input, Container } from "semantic-ui-react";
import { Advertisement } from "semantic-ui-react";


export default function Navi() {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Menu position="left">
            <Menu.Item icon="home" name="HRMS"></Menu.Item>
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item icon="globe" name="Choose Language" />

            <Menu.Item icon="question mark" name="help"></Menu.Item>

            <Menu.Item icon="logout" name="log In"></Menu.Item>

            <Menu.Item icon="signup" name="Sign Up"></Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
