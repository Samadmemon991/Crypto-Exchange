// TransferForm.js
import React, { useState } from 'react';
import PromptCard from '../Layout/PromptCard';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '../Layout/Card';
import { Button, FloatingLabel, Form, Stack } from 'react-bootstrap';

const TransferForm = () => {
  // const TransferForm = ({ coin, user, coinSymbol }) => {
  const coinData = useSelector((state) => state.globalCoinDataReducer.data);
  const [transferAddress, setTransferAddress] = useState('');
  const [coinChain, setCoinChain] = useState('');
  const [msg, setMsg] = useState();
  const navigate = useNavigate();


  const handleTransfer = (e) => {
    e.preventDefault()
    console.log(e.target.transferAddress.value)
    // Your transfer logic here...
    console.log('Transfer initiated.');
    setMsg(<PromptCard class={"primary"} body={"Coins transferred."} />)
    setTimeout(() => { navigate('/dashboard'); }, 1500);

    // Assuming transfer is successful, redirect the user to the dashboard
  };



  const [searchParams, setSearchParams] = useSearchParams();

  const user = searchParams.get("user")
  const coinSymbol = searchParams.get("coinSymbol")

  if (!user || !coinSymbol || !coinData) {
    return <PromptCard class={"danger"} body={"Login required to visit this page."} />
  }
  if (coinData) {

    const coin = coinData[coinSymbol];
    console.log(coin);
    // console.log(user);
    // console.log(coinSymbol);

    return (
      <div>
        <>
          <Card title={`Transfer ${coin.name_full}`} maxWidth={"50%"}>
            <Form className="text-dark" onSubmit={handleTransfer}>
              <Stack>
                <Form.Group>
                  <FloatingLabel
                    controlId="transferAddress"
                    label="Transfer Address"
                    className="mb-3"
                  >
                    <Form.Control type="text" />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group>
                  <FloatingLabel controlId="coinChain" label="Coin Chain">
                    <Form.Control as="select"  >
                      {/* Your options for coin chain dropdown */}
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      {/* Add more options as needed */}
                    </Form.Control>
                  </FloatingLabel>
                </Form.Group>
                <Button className="mt-2" type="submit" variant="primary">Transfer</Button>
              </Stack>
            </Form>
          </Card>
          {msg}
        </>
      </div>
    );
  }
};

export default TransferForm;
