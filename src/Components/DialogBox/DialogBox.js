import { Paper, Container } from '@mui/material';

const DialogBox = ({ component }) => {

    return (
        <Container maxWidth="sm"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
        >
            <Paper elevation={10} >
                {component}
            </Paper>
        </Container>
    );
}
export default DialogBox;