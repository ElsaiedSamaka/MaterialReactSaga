import * as React from "react";
import classNames from "classnames";
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
  Textarea,
  Tooltip,
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
import { createProduct } from "../../core/actions/products/products.actions";

function BasicModalDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    img: null,
    colors: "",
    sizes: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e: any) => {
    if (e && e.target && e.target.name) {
      // Check if e and e.target are not null
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files[0];
    setFormData({
      ...formData,
      img: file,
    });
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    dispatch(createProduct(formData));
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        New product
      </Button>
      <Modal className="!z-50" open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create new product</DialogTitle>
          <DialogContent>Fill in the information of the product.</DialogContent>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={2}>
              <div className="flex space-x-2">
                <Tooltip
                  title="product main image"
                  arrow
                  placement="bottom"
                  size="md"
                  variant="outlined"
                >
                  <img
                    src={formData.img ? URL.createObjectURL(formData.img) : ""}
                    alt="product"
                    className={classNames(
                      { invisible: !formData.img },
                      "w-20 h-20",
                    )}
                  />
                </Tooltip>
                <Button
                  className="!bg-transparent !text-black"
                  component="label"
                >
                  <input
                    type="file"
                    title="img"
                    placeholder=""
                    name="img"
                    onChange={handleFileUpload}
                  />
                </Button>
              </div>
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
                  <FormLabel>Price</FormLabel>
                  <Input
                    required
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </div>
              <div className="flex space-x-2">
                <FormControl>
                  <FormLabel>Colors</FormLabel>
                  <Input
                    required
                    name="colors"
                    value={formData.colors}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Sizes</FormLabel>
                  <Input
                    required
                    name="sizes"
                    value={formData.sizes}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </div>
              <div className="flex space-x-2">
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    maxRows={2}
                    minRows={2}
                    required
                    name="description"
                    value={formData.description}
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
                    <Option value="1">1</Option>
                    <Option value="2">1</Option>
                    <Option value="3">1</Option>
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
