import { Box, Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ProductPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Header product page</Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained">demo</Button>
        <Box sx={{ width: 50, height: 50 }}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Box>
      </Box>
    </Box>
  );
}

export default ProductPage;
