import React, { memo } from 'react';
import youtube_logo from '../sources/youtube_logo.png';

const Navbar = memo(props => {
    const searchRef = React.createRef();
    const formRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const search = searchRef.current.value;
        search && props.onSearch(search);
        formRef.current.reset();
        console.log('onSumbit');
        props.onVideoId('');
    }

    const reLoad = () => {
        window.location.href=window.location.href;
    }

    console.log('Navbar');
    return (
        <form ref={formRef} className="navbar-search-form" onSubmit={onSubmit}>
            <nav className="navbar">
                <img src={youtube_logo} width='120px' height='40px' alt='No image' onClick={reLoad}/>
                <input 
                    className="navbar-search"
                    ref={searchRef} 
                    type="text" 
                    placeholder=" search..." 
                />
                <button className="navbar-button"><i className="fas fa-search navbar-button-logo"></i></button>
            </nav>
        </form>
    );
});
    

        

export default Navbar;