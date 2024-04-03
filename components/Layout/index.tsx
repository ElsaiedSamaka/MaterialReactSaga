import Sidebar from "./Sidebar";
import { Box } from "@mui/joy";
const RootLayout = ({ children }:any) => {
  return (
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Sidebar />
        {children}
      </Box>
  );
};

export default RootLayout;
