import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { K_URL } from '../config/constants'

export const Home = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState([]);

    useEffect(async() => {
        let res = await axios.get(`${K_URL}/list`);
        console.log(res.data);
        setRowData([...res.data]);
        
    }, [])
    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="make"></AgGridColumn>
                <AgGridColumn  field="model"></AgGridColumn>
                <AgGridColumn field="price"></AgGridColumn>
            </AgGridReact>
        </div>
    );
}
