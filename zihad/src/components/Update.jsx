import React, { useEffect, useState } from "react";

// modal

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

// Hook Form

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { editItem } from "../app/features/data/friendSlice";

const Update = ({ handleClose, open, setOpen, edit }) => {
  let dispatch = useDispatch();
  let { id } = edit;

  // modal

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

  // Hook Form

  const schema = yup
    .object({
      name: yup.string(),
      age: yup.number(),
      home: yup.string(),
      university: yup.string(),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: edit,
  });
  useEffect(() => {
    if (edit) {
      reset(edit);
    }
  }, [edit]);

  const onSubmit = (data) => {
    setOpen(false);
    dispatch(
      editItem({
        data,
        id,
      })
    );
  };

  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update Friend Info
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="First name"
                      variant="outlined"
                      sx={{ width: "100%", marginTop: "20px" }}
                      label="Enter Name"
                    />
                  )}
                  name="name"
                />

                <Controller
                  control={control}
                  name="age"
                  render={({ field }) => (
                    <TextField
                      sx={{ marginTop: "20px", width: "100%" }}
                      label="Age"
                      type="number"
                      {...field}
                      id="outlined-basic"
                      variant="outlined"
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="home"
                  render={({ field }) => (
                    <TextField
                      sx={{ marginTop: "20px", width: "100%" }}
                      label="Home"
                      type="text"
                      {...field}
                      id="outlined-basic"
                      variant="outlined"
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="university"
                  render={({ field, field: { errors } }) => (
                    <TextField
                      sx={{ marginTop: "20px", width: "100%" }}
                      label="University"
                      type="text"
                      {...field}
                      id="outlined-basic"
                      variant="outlined"
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
                    onClick={handleClose}
                    variant="outlined"
                  >
                    Close
                  </Button>
                </Box>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Update;
