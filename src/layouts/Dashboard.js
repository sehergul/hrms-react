//React component'ler PascalCase

import React from "react";
import Navi from "./Navi";
import { Advertisement, Grid } from "semantic-ui-react";
import SideBar from "./SideBar";
import Employers from "../pages/Users/Employers";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <SideBar />
          </Grid.Column>
          <Grid.Column width={12}>
 
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
