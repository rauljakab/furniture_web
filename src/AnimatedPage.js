import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedPage = () => {
    const styles = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={styles}>
            <h1>Welcome to the Animated Page!</h1>
            <p>This page showcases animations using react-spring.</p>
        </animated.div>
    );
};

export default AnimatedPage;
