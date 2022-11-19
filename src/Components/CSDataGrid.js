import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function CSDataGrid(props) {
  const { rows, columns } = props;
  return (
    <Box sx={{ height: 423, width:'100%'}}>
      <DataGrid
        onSelectionModelChange={(e) => {
          console.log(e);
        }}
        rows={rows}
        columns={columns}
        // pagination
        pageSize={6}
        // rowsPerPageOptions={[5, 10]}
        checkboxSelection
        disableSelectiononOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
export default CSDataGrid;
