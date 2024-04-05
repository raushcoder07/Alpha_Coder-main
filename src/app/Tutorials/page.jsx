import { AspectRatio, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from "@chakra-ui/react";


function Tutorials() {
    return (
        <>
            <h1 className="text-center font-bold" style={{ color: "#0071bd", fontSize: "30px" }}>Knowledge Section</h1>
            <div className="flex gap-2 mb-3 ">
                <Card maxW='sm'>
                    <CardBody>
                        <AspectRatio maxW='400px' ratio={4 / 3}>
                        <video src="/Stocks.mp4" controls></video>
                        </AspectRatio>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Intro to Stocks</Heading>
                            <Text>
                                Stocks are one of the primary components of the financial markets, representing ownership in a company.
                                When you purchase a stock, you essentially acquire a share of ownership in that company,
                                entitling you to a portion of its assets and earnings
                            </Text>

                        </Stack>
                    </CardBody>

                </Card>

                <Card maxW='sm'>
                    <CardBody>
                        <AspectRatio maxW='400px' ratio={4 / 3}>
                        <video src="/Freedom.mp4" controls></video>
                           

                        </AspectRatio>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Nifty / Sensex 101</Heading>
                            <Text>
                                TNifty and Sensex are two prominent stock market indices in India.
                                These indices serve as barometers for the overall performance of
                                the stock market and provide insights into the direction of the economy.
                            </Text>

                        </Stack>
                    </CardBody>

                </Card>
            </div>
        </>
    );
}

export default Tutorials;