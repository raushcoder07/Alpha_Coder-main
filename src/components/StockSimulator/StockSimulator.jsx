"use client";

import { useState, useEffect } from "react";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const StockSimulator = () => {
    const getRandomNumber = () => {
        return (Math.random() * 100).toFixed(2);
    };

    const [stockData, setStockData] = useState({
        "EUR/USD": { into: getRandomNumber(), multiplyBy: getRandomNumber() },
        "GBP/JPY": { into: getRandomNumber(), multiplyBy: getRandomNumber() },
        "GBP/USD": { into: getRandomNumber(), multiplyBy: getRandomNumber() },
        "EUR/GBP": { into: getRandomNumber(), multiplyBy: getRandomNumber() }
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setStockData(prevData => ({
                "EUR/USD": { into: getRandomNumber(), multiplyBy: getRandomNumber() },
                "GBP/JPY": { into: getRandomNumber(), multiplyBy: getRandomNumber() },
                "GBP/USD": { into: getRandomNumber(), multiplyBy: getRandomNumber() },
                "EUR/GBP": { into: getRandomNumber(), multiplyBy: getRandomNumber() }
            }));
        }, 5000); // Change values every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <TableContainer>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>Currency Stock</Th>
                            <Th>Into</Th>
                            <Th isNumeric>Multiply By</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Object.entries(stockData).map(([currency, data]) => (
                            <Tr key={currency}>
                                <Td>{currency}</Td>
                                <Td>{data.into}</Td>
                                <Td isNumeric>{data.multiplyBy}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default StockSimulator;
