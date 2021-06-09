import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Menu, Icon, Input, Table } from "semantic-ui-react";


export default function JobAdvertisements() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  });
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Job Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Job Max Salary</Table.HeaderCell>
            <Table.HeaderCell>Job Published Date</Table.HeaderCell>
            <Table.HeaderCell>Job Deadline</Table.HeaderCell>
            <Table.HeaderCell>Number of Position</Table.HeaderCell>
            <Table.HeaderCell>Active</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobMinSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobMaxSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobAdvertisementDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobDeadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.numberOfJobPosition}</Table.Cell>
              <Table.Cell>{jobAdvertisement.isActive}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
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
