export const columns = [
    {
        field: 'id',
        headerName: 'id',
        width: 100
    },
    {
        field: 'name',
        headerName: 'name',
        width: 200,
    },
    {
        field: 'admin',
        headerName: 'is admin',
        width: 100,
        valueGetter: (params) => {
            return params.value ? "〇" : ""
        },
    },
    {
        field: 'phone',
        headerName: 'phone',
        width: 400,
    },
    {
        field: 'email',
        headerName: 'email',
        width: 400,
    },
];