import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid';

export default function DataGrid({ columns, rows, onCellClick, pageSize = 10 }) {
    return (
        <Box sx={{ width: '100%' }}>
            <MuiDataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: pageSize,
                        },
                    },
                }}
                pageSizeOptions={[pageSize]}
                checkboxSelection={false}
                disableRowSelectionOnClick
                onCellClick={(cell) => { onCellClick(cell) }}
            />
        </Box>
    );
}