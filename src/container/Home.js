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
        setGridApi([...res.data]);
        setGridColumnApi([...res.data]);
    }, [])
    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 1000, textAlign:'center',justifyContent:'center' }}>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="NUM" width={100} headerName="번호"></AgGridColumn>
                <AgGridColumn field="TITLE" width={500} headerName="제목"></AgGridColumn>
                <AgGridColumn field="WRITER" width={200} headerName="글쓴이"></AgGridColumn>
                <AgGridColumn field="REG_DT" width={300}  headerName="날짜"></AgGridColumn>
            </AgGridReact>
        </div>
    );
}
