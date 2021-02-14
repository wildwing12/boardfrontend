import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { L_URL } from '../config/constants';

export const About = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);

    useEffect(async () => {
        let res = await axios.get(`${L_URL}/list`);
        console.log(res.data);
        setGridApi([...res.data])
        setGridColumnApi([...res.data])
        setRowData([...res.data]);
    }, []);

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 1050, textAlign: 'center' }}>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="rn" headerName="NO" width={80}></AgGridColumn>
                <AgGridColumn field="title" headerName="TITLE" width={150}></AgGridColumn>
                <AgGridColumn field="writer" headerName="WRITER" width={150}></AgGridColumn>
                <AgGridColumn field="regDt" headerName="DATE"></AgGridColumn>
                <AgGridColumn field="content" headerName="CONTENT" width={500}></AgGridColumn>
            </AgGridReact>
        </div>
    )
}
