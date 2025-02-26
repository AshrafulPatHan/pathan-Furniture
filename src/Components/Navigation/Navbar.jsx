import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    <img src="/logo.svg" alt="logo" />
                </div>
                <div>
                    <div>
                        <p>
                            Shop Now
                        </p>
                        <p>
                            Home Furniture
                        </p>
                        <p>
                            All Furniture
                        </p>
                        <p>
                            About Us
                        </p>
                        <p className='Inter'>
                            Contact Us
                        </p>
                    </div>
                    <div>
                        <button>
                            Log in
                        </button>
                        <button>
                            Get start
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;