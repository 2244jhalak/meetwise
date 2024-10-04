import React from 'react';
import Lottie from 'react-lottie';

const LottieAnimation = ({ animationData }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData, // Props থেকে এনিমেশন ডাটা পাস করা হবে
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div>
             <Lottie options={defaultOptions} height={400} width={500} /> 
        </div>
    );
};

export default LottieAnimation;