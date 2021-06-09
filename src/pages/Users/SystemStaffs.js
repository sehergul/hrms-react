import React from "react";
import SystemStaffService from "../../services/systemStaffService";


export default function SystemStaffs() {
  const [systemStaffs, setSystemStaffs] = useState([]);

  useEffect(() => {
    let systemStaffService = new SystemStaffService();
    systemStaffService
      .getSystemStaffs()
      .then((result) => setSystemStaffs(result.data.data));
  });
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {systemStaffs.map((systemStaff) => (
            <Table.Row key={systemStaff.id}>
              <Table.Cell>{systemStaff.firstName}</Table.Cell>
              <Table.Cell>{systemStaff.lastName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="2">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
