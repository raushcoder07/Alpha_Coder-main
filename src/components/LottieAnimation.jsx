"use client"
import Lottie from "lottie-react";

import Loder from "./data.json"

function LottieAnimation() {
    return (
        <>
            <div >
                <Lottie animationData={Loder}/>
            </div>
        </>
    );
}

export default LottieAnimation;