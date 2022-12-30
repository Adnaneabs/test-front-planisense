import React from 'react'
import './List.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableBody, TableCell, TableContainer } from '@mui/material';
export default function List(props) {
  return (
                <div className="container">
                    <div className="row">
                        <h2>Liste des arbres par {props.type} </h2>
                    </div>
                    <Paper >
                    <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                            <TableRow>
                                <TableCell align='center' scope="col" style={{backgroundColor: 'green', height: '50px'}}>{props.type}</TableCell>
                                <TableCell align='center' scope="col"style={{backgroundColor: 'brown', height: '50px'}}>Nombre d'arbres</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {
                                Object.keys(props.data).map((tree,id) => (
                                    <TableRow key={id}>
                                        <TableCell align="center">{tree}</TableCell>
                                        <TableCell align="center">{props.data[tree]}</TableCell>
                                    </TableRow>
                                ))
                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    </Paper>                       
                </div>
  )
}
