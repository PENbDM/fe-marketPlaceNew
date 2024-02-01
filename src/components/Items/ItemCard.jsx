import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ItemCard({ item }) {
  return (
    <Card
      sx={{
        minWidth: 200,
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
      }}>
      <CardMedia
        sx={{ height: 180, margin: 1 }}
        image={item.img_url}
        title={item.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {item.item_name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {`€${item.price}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <Box sx={{ p: 1 }} className="flex justify-center items-center">
        <CardActions>
          <Button
            variant="contained"
            color="success"
            size="small"
            startIcon={<AddShoppingCartIcon />}>
            Add to Cart
          </Button>
          <IconButton aria-label="edit" color="warning">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" color="error">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}
