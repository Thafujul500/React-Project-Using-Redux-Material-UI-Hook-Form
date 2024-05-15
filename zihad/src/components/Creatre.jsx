import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addIterm } from "../app/features/data/friendSlice";

// Hook form

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Creatre = () => {
  let dispatch = useDispatch();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpenCreateModal = () => setOpen(true);
  const handleOpenCloseModal = () => setOpen(false);

  const schema = yup
    .object({
      name: yup.string().required(),
      age: yup.number().required(),
      home: yup.string().required(),
      university: yup.string().required(),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    let id = Math.random();
    dispatch(addIterm({ data, id }));
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          sx={{ marginTop: "20px" }}
          variant="contained"
          onClick={handleOpenCreateModal}
        >
          Add Friend Info
        </Button>

        <Modal
          open={open}
          onClose={handleOpenCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Friend Info
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  control={control}
                  name="name"
                  render={({ field, field: { errors } }) => (
                    <TextField
                      sx={{ marginTop: "20px", width: "100%" }}
                      type="text"
                      id="standard-basic"
                      label="Enter Name"
                      variant="outlined"
                      {...field}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="age"
                  render={({ field, field: { errors } }) => (
                    <TextField
                      sx={{ marginTop: "20px", width: "100%" }}
                      type="number"
                      id="standard-basic"
                      label="Enter Age"
                      variant="outlined"
                      {...field}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="home"
                  render={({ field, field: { errors } }) => (
                    <TextField
                      sx={{ marginTop: "20px", width: "100%" }}
                      type="text"
                      id="standard-basic"
                      label="Enter Home"
                      variant="outlined"
                      {...field}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="university"
                  render={({ field, field: { errors } }) => (
                    <TextField
                      sx={{ marginTop: "20px", width: "100%" }}
                      type="text"
                      id="standard-basic"
                      label="Enter University"
                      variant="outlined"
                      {...field}
                    />
                  )}
                />

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    sx={{ marginTop: "20px" }}
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>

                  <Button
                    sx={{ marginTop: "20px" }}
                    onClick={handleOpenCloseModal}
                    variant="outlined"
                  >
                    Close
                  </Button>
                </Box>
              </form>
            </Typography>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default Creatre;
