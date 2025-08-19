import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BaseUrl } from "../../../../Utilities/config/BaseUrl";
import axios from "axios";
import { Link } from "react-router";

const BusinessAdminProductTable = () => {
  const [allBusinessProducts, setAllBusinessProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const businessAdminUser = localStorage.getItem("businessAdminUser");
      const { id: businessId } = JSON.parse(businessAdminUser);
      const res = await axios.get(
        BaseUrl(`business-admin-users/${businessId}`)
      );
      setAllBusinessProducts(res.data.product || []);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Link to="/business-dashboard/business-product-add">
          <button className="bg-green-500 hover:bg-green-900 text-white px-4 py-2 rounded">
            Add
          </button>
        </Link>
      </div>
      <h1>Total Products: {allBusinessProducts.length}</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="business admin table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#dee3e0" }}>
              <TableCell>Index</TableCell>
              <TableCell>Product Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Warranty</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allBusinessProducts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No Data Found
                </TableCell>
              </TableRow>
            ) : (
              allBusinessProducts.map((product, index) => (
                <TableRow
                  key={product._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.price} $</TableCell>
                  <TableCell>{product.warranty}</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BusinessAdminProductTable;
