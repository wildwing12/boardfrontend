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
        console.log(res);
        if(res.status === 200){
            setGridApi([...res.data])
            setGridColumnApi([...res.data])
            setRowData([...res.data]);
        }
    }, []);

    return (
        <>
        <br/>
        <h1 style={{textAlign: 'center'}} className="text-success">이현주 게시판</h1>
        <br/>
        <div className="ag-theme-alpine" style={{ width: 1100, height: 400, textAlign: 'center', justifyContent: 'center' }}>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="rn" headerName="NO" width={100}></AgGridColumn>
                <AgGridColumn field="title" headerName="TITLE" width={350}></AgGridColumn>
                <AgGridColumn field="writer" headerName="WRITER" width={250}></AgGridColumn>
                <AgGridColumn field="regDt" headerName="DATE" width={400}></AgGridColumn>
            </AgGridReact>
        </div>
        </>
    )
}
