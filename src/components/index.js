import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 60,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 1,
                                color: 'tomato'
                            }
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim : {
                                enable: true,
                                speed: 10,
                                size_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
        </>
    )
}

export default Home
