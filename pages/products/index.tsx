import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import ProductsTable from "../../components/products/ProductsTable";
import ProductsList from "../../components/products/ProductsList";
import RootLayout from "../../components/Layout";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Add } from "@mui/icons-material";
import {
  Select,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalDialog,
  Stack,
  Option,
} from "@mui/joy";
function ProductsPage() {
  return (
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: "calc(12px + var(--Header-height))",
          sm: "calc(12px + var(--Header-height))",
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        height: "100dvh",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            href="#some-link"
            fontSize={12}
            fontWeight={500}
          >
            Dashboard
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Products
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          Products
        </Typography>
      </Box>
      <BasicModalDialog />
      <ProductsTable />
      <ProductsList />
    </Box>
  );
}
ProductsPage.getLayout = (page: any) => {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductsPage;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../core/actions/products.actions";

function BasicModalDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    img: null
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (e && e.target && e.target.name) {
      // Check if e and e.target are not null
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleFileUpload = (e)=>{
     const file = event.target.files[0];
     setFormData({
        ...formData,
       img: file
     })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("formData", formData);
    dispatch(createProduct(formData));
    // setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        startIcon={<Add />}
        onClick={() => setOpen(true)}
      >
        New product
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create new product</DialogTitle>
          <DialogContent>Fill in the information of the product.</DialogContent>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={2}>
              <Button variant="contained" component="label">
                Upload File
                <input type="file" name="img" onChange={handleFileUpload} hidden />
              </Button>
              <div className="flex space-x-2">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    autoFocus
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Input
                    required
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </div>
              <div className="flex space-x-2">
                <FormControl>
                  <FormLabel>Price</FormLabel>
                  <Input
                    required
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Category</FormLabel>
                  <Select
                    color="neutral"
                    placeholder="Choose one…"
                    variant="outlined"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <Option>...</Option>
                  </Select>
                </FormControl>
              </div>
              <Button className="bg-black p-2 rounded text-white" type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
