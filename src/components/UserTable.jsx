import React from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
} from "semantic-ui-react";
import users from "../data/users";

const UserTable = () => (
  <Table celled>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>User Name</TableHeaderCell>
        <TableHeaderCell>Email</TableHeaderCell>
        <TableHeaderCell>Verified or Not</TableHeaderCell>
        <TableHeaderCell>ID Number</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell>{user.username}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell
            {...(user.verified ? { positive: true } : { negative: true })}
          >
            {user.verified ? "Verified" : "Not Verified"}
          </TableCell>
          {/* Random ID Number */}
          <TableCell>{Math.trunc(Math.random() * 10000000)}</TableCell>
        </TableRow>
      ))}
    </TableBody>

    {/* <TableBody>
      <TableRow>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
      </TableRow>
    </TableBody> */}

    <TableFooter>
      <TableRow>
        <TableHeaderCell colSpan="4">
          <Menu floated="right" pagination>
            <MenuItem as="a" icon>
              <Icon name="chevron left" />
            </MenuItem>
            <MenuItem as="a">1</MenuItem>
            <MenuItem as="a">2</MenuItem>
            <MenuItem as="a">3</MenuItem>
            <MenuItem as="a">4</MenuItem>
            <MenuItem as="a" icon>
              <Icon name="chevron right" />
            </MenuItem>
          </Menu>
        </TableHeaderCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export default UserTable;
