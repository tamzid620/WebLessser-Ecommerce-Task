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


const SuperCustomerTable = () => {
  const [allBusinessCustomers, setAllBusinessCustomers] = React.useState([]);

  React.useEffect(() => {
    const fetchBusinessCustomers = async () => {
      try {
        const res = await axios.get(
          BaseUrl("business-admin-users/all-business-admin")
        ); // should be GET, not POST
        setAllBusinessCustomers(res.data);
      } catch (error) {
        console.error("Error fetching business admins:", error);
      }
    };

    fetchBusinessCustomers();
  }, []);

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Link to="/super-dashboard/super-customer-add">
        <button className="bg-green-500 hover:bg-green-900 text-white px-4 py-2 rounded">Add</button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="business admin table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#dee3e0" }}>
              <TableCell>index</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {allBusinessCustomers?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    No Data Found
                  </TableCell>
                </TableRow>
             
            ) : (
                <>
                    {allBusinessCustomers.map((admin, index) => (
                      <TableRow
                        key={admin._id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{admin.firstName}</TableCell>
                        <TableCell>{admin.lastName}</TableCell>
                        <TableCell>{admin.userName}</TableCell>
                        <TableCell>{admin.phoneNo}</TableCell>
                        <TableCell>{admin.email}</TableCell>
                        <TableCell>{admin.role}</TableCell>
                        <TableCell>{admin.subDomain}</TableCell>
                        <TableCell>
                          {new Date(admin.createdAt).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SuperCustomerTable;
