import Link from 'next/link';

const Explain = () => {
    const returnToResult = () => {
        // Define returnToResult function here
        console.log("return to result");
    };

    return (
        <>
            <div className="min-h-screen flex justify-center items-center ">
                <div className="max-w-md w-full px-8 py-12 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <h1 className="text-3xl font-bold text-center mb-8 ">Question Explanations</h1>
                    
                    <div className="text-center mb-6">
                        <h2 className="text-xl font-bold mb-4">Question 1 Explanation</h2>
                        <p className="mb-2">Explanation: In a bull market, stock prices generally rise over an extended period, reflecting investor optimism and confidence in the economy. This is typically characterized by increasing stock prices, strong economic growth, and high investor sentiment.</p>
                        <p className="mb-4">Video link: <a href="#" className="text-blue-500">Video Link for Question 1</a></p>
                        <h2 className="text-xl font-bold mb-4">Question 2 Explanation</h2>
                        <p className="mb-2">Explanation: An Initial Public Offering (IPO) is the process by which a privately held company offers its shares to the public for the first time, allowing investors to buy ownership stakes in the company. It is a significant event for a company as it transitions from being privately held to publicly traded on a stock exchange.</p>
                        <p className="mb-4">Video link: <a href="#" className="text-blue-500">Video Link for Question 2</a></p>
                    </div>
                    <div className="text-center">
                        <Link href="/Quiz">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Return to Result</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Explain;
