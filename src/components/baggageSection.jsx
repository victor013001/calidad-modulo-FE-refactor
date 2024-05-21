import DeleteIcon from '@mui/icons-material/Delete';
import {
    Box, IconButton, Modal, Paper, Snackbar, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, Alert
} from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import BaggageTable from "./baggageTable";

function BaggageOptionsSection() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [luggages, setLuggages] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const getLuggages = async () => {
        try {
            const response = await fetch("http://localhost:8080/sitas-api/luggage");

            if (!response.ok) {
                throw new Error('Hubo un problema al consultar los datos.');
            }

            const data = await response.json();
            console.log('Datos consultados:', data);
            // Actualizae el estado con los datos obtenidos
            setLuggages([...data]);
        } catch (error) {
            console.error('Error al consultar los datos:', error.message);
            return null;
        }
    }

    const deleteLuggage = async (luggage) => {
        try {
            const response = await fetch(`http://localhost:8080/sitas-api/luggage/${luggage.id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Hubo un problema al enviar los datos.');
            }

            setLuggages(prevEquipajes => prevEquipajes.filter(item => item.id !== luggage.id));
            setSnackbarMessage('El equipaje se eliminó correctamente.');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
        } catch (error) {
            console.error('Error al eliminar el equipaje:', error.message);
            setSnackbarMessage('Hubo un problema al eliminar el equipaje.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    useEffect(() => {
        // Llamar a la función para consultar los datos de los equipajes
        getLuggages();
    }, []);

    // TODO: Usar los indices correctos para eliminar el equipaje
    return (
        <div className="flex justify-center mt-28">
            <div className="mx-auto max-w-screen-lg">
                <h1 className="text-3xl font-semibold text-cyan-500 mb-4">Reserva: ########</h1>
                <h2 className="text-2xl text-cyan-500 mb-4">Nombre de Pasajero</h2>
                <p className="text-gray-500 text-xl">
                    Ten en cuenta nuestras políticas para equipaje, peso, dimensiones, equipaje
                    especial, entre otros.
                </p>
                <BaggageTable />
                <div className='flex justify-center mb-8'>
                    <Button variant='contained' onClick={handleOpen}>Ver mi equipaje</Button>
                </div>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <div>
                            {luggages.length > 0 ? (
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Anchura</TableCell>
                                                <TableCell>Altura</TableCell>
                                                <TableCell>Longitud</TableCell>
                                                <TableCell>Peso</TableCell>
                                                <TableCell>Descripción</TableCell>
                                                <TableCell>Tipo de Equipaje</TableCell>
                                                <TableCell>Eliminar</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {luggages.map((luggage, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{luggage.width}</TableCell>
                                                    <TableCell>{luggage.height}</TableCell>
                                                    <TableCell>{luggage.length}</TableCell>
                                                    <TableCell>{luggage.weight}</TableCell>
                                                    <TableCell>{luggage.description}</TableCell>
                                                    <TableCell>{luggage.luggage_type}</TableCell>
                                                    <TableCell>
                                                        <IconButton onClick={() => deleteLuggage(luggage)}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            ) : (
                                <p>No hay equipaje</p>
                            )}
                        </div>
                    </Box>
                </Modal>
                <Snackbar id='snackbar' open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}

export default BaggageOptionsSection