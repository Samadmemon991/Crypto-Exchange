import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, tableCellClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Container } from 'react-bootstrap';
import { blueGrey, pink } from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

function createData(
  id,
  title,
  subtitle,
  author,
) {
  return { id, title, subtitle, author };
}

const rows = [
  createData(1, "An apple mobile which is nothing like apple", "iPhone 9", "John Doe"),
  createData(2, "OPPO F19 is officially announced on April 2021.", "OPPOF19", "John Doe"),
  createData(3, "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "Infinix INBOOK", "John Doe"),
  // createData(4, 305, 3.7, 67, 4.3),
  // createData(5, 356, 16.0, 49, 3.9),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: blueGrey[800],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function Blogs() {
  return (
    <Container >
      <TableContainer className='mt-4' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Blog Id</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="left">Subtitle</StyledTableCell>
              <StyledTableCell align="left">Author</StyledTableCell>
              <StyledTableCell align="center">Action
                <AddIcon className='ms-5 ' style={{marginRight:"-3rem"}} />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.subtitle}</TableCell>
                <TableCell align="left">{row.author}</TableCell>
                <TableCell align="center">
                  <VisibilityIcon color="primary" className='mx-1' />
                  <EditIcon className='mx-1' />
                  <DeleteForeverIcon sx={{ color: pink[500] }} className='mx-1' />

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
