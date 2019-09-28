import React from "react";
import { Table, TableRow, TableHead, TableBody, TableCell, } from "@material-ui/core";

// components
import { Button } from "../../../../components/Wrappers/Wrappers";

const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
  inventory: "",
  top: "",
  status: "success",
};

export default function ProducerTableComponent({ data }) {
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, fullName, email, name, stock, volume}) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{name}</TableCell>
            <TableCell>{fullName}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{stock}</TableCell>
            <TableCell>{volume}</TableCell>
            <TableCell>
              {/* <Button
                color={states[status.toLowerCase()]}
                size="small"
                className="px-2"
                variant="contained"
              >
                {status}
              </Button> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
