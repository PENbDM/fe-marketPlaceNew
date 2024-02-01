import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { DialogContent, DialogTitle } from "@mui/material";
import axios from "axios";

function SimpleDialog(props) {
  const { setItemIsSubmitted, onClose, open } = props;
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");

  const addNewItem = async () => {
    const data = await axios.post(
      "https://nc-marketplace-sem-1.onrender.com/api/items",
      {
        item_name: itemName,
        price: price,
        description: description,
        img_url: imgUrl,
        category_name: category,
      }
    );
    return data;
  }

  const handleAdd = async () => {
    if (itemName === "" || price === 0 || description === "" || imgUrl === "") {
      alert("Please fill in all fields");
      return;
    } else {
      await addNewItem();
      setItemIsSubmitted(true);
      alert("Item added successfully");
      return;
    }
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Add a new Item</DialogTitle>
      <DialogContent>
        <div className="flex justify-center flex-col my-2 gap-3">
          <TextField
            id="outlined-basic"
            label="Item Name"
            variant="outlined"
            onChange={(e) => setItemName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Image URL"
            variant="outlined"
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button variant="contained" color="success" onClick={handleAdd}>
            Add Item
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AddItemDialog({ setItemIsSubmitted }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Add New Item
      </Button>
      <SimpleDialog open={open} onClose={handleClose} setItemIsSubmitted={setItemIsSubmitted} />
    </>
  );
}
