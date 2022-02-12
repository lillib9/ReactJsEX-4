import React from 'react';
import ReactDOM from 'react-dom';
import Fourth from './Fourth';
import Button from './button';
import './styles.css';
const App = () => {
    return(
        <>
        <Fourth />
        <Button />

            
        
        </>
    )
};

ReactDOM.render(

    <App />,
    document.getElementById('root')
);