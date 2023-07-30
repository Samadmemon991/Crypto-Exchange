import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCoins, fetchRates } from '../actions';
import {  Image, Button, Container } from 'react-bootstrap';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import StyledCell from '../Layout/StyledCell';

const Dashboard = () => {
  // const dispatch = useDispatch();
  // const coins = useSelector((state) => state.coins);
  // const rates = useSelector((state) => state.rates);

  // useEffect(() => {
  //   // Fetch coins and rates data when the component mounts
  //   dispatch(fetchCoins());
  //   dispatch(fetchRates());
  // }, [dispatch]);

  const coins = {

    "611": {
      "symbol": "611",
      "name": "SixEleven",
      "name_full": "SixEleven (611)",
      "max_supply": 611000,
      "icon_url": "https://assets.coinlayer.com/icons/611.png"
    },
    "ABC": {
      "symbol": "ABC",
      "name": "AB-Chain",
      "name_full": "AB-Chain (ABC)",
      "max_supply": 210000000,
      "icon_url": "https://assets.coinlayer.com/icons/ABC.png"
    },
    "ACP": {
      "symbol": "ACP",
      "name": "Anarchists Prime",
      "name_full": "Anarchists Prime (ACP)",
      "max_supply": 53760000,
      "icon_url": "https://assets.coinlayer.com/icons/ACP.png"
    },
    "ACT": {
      "symbol": "ACT",
      "name": "ACT",
      "name_full": "ACT (ACT)",
      "max_supply": 10000000000,
      "icon_url": "https://assets.coinlayer.com/icons/ACT.png"
    },

  };

  const rates = {

    "611": 0.389165,
    "ABC": 59.99,
    "ACP": 0.014931,
    "ACT": 0.00107,
  };

  const handleTransfer = (coin) => {
    // Implement the transfer functionality here
    console.log(`Transferring ${coin.name_full}`);
  };

  const StyledTableCell = StyledCell;


  return (
    <Container>
      <TableContainer className='mt-4' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Coin</StyledTableCell>
              <StyledTableCell>Live Rate (USD)</StyledTableCell>
              <StyledTableCell>Coins Quantity</StyledTableCell>
              <StyledTableCell>Total Worth</StyledTableCell>
              <StyledTableCell>Transfer</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {Object.keys(coins).map((coinKey) => {
              const coin = coins[coinKey];
              return (
                <TableRow key={coin.symbol}>
                  <TableCell>
                    <div className="d-flex align-items-center">
                      <Image src={coin.icon_url} alt={coin.name_full} width={30} height={30} className="me-2" />
                      <div>
                        <div>{coin.symbol}</div>
                        <div>{coin.name_full}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{rates[coin.symbol]}</TableCell>
                  <TableCell>{coin.quantity}</TableCell>
                  <TableCell>{(rates[coin.symbol] * coin.quantity).toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="primary" onClick={() => handleTransfer(coin)}>
                      Transfer
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Dashboard;
