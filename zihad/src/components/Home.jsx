import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { deleteItem } from "../app/features/data/friendSlice";
import Update from "./Update";
import Creatre from "./Creatre";
import Empty from "./Empty";

const Home = () => {
  let value = useSelector((state) => state.friendDetails.friend);
  let dispatch = useDispatch();

  // delete

  let handleDelete = (item) => {
    dispatch(deleteItem(item));
  };

  // delete

  // Update

  const [open, setOpen] = React.useState(false);
  let [edit, setEdit] = useState({});

  const handleOpen = (receive) => {
    setOpen(true);
    setEdit(receive);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Creatre />

      <TableContainer
        sx={{ width: "800px", margin: "0 auto", marginTop: "50px" }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Age
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Home
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                University
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {value.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.age}</TableCell>
                <TableCell align="center">{item.home}</TableCell>
                <TableCell align="center">{item.university}</TableCell>
                <TableCell align="center" width={"23%"}>
                  <Button
                    onClick={() => {
                      handleDelete(item);
                    }}
                    size="small"
                    variant="outlined"
                    sx={{ marginTop: "10px" }}
                    color="error"
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      handleOpen(item);
                    }}
                    size="small"
                    variant="contained"
                    color="success"
                    sx={{ marginTop: "10px", ml: "15px" }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Update
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
        edit={edit}
        setEdit={setEdit}
      />
    </div>
  );
};

export default Home;
