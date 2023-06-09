import React, { useState } from 'react'
import { Label, Input, Row, Col } from 'reactstrap';
import PageBuilder from '../services/PageBuilder';
import { send } from 'emailjs-com';

const Home = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        {/* --- METHOD TO SEND THE MAIL --- */ }
        e.preventDefault();
        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            toSend,
            process.env.REACT_APP_UNKNOWN_ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className='main-page-bg' >
            <h1>Home Page</h1>
            <p> {process.env.SERVICE_ID} </p>
            <div id='dynamic-id' >
                <Label>   This class is dynamic! </Label>
                <PageBuilder />
                {/* form area */}
                {/* <div>
                    <form onSubmit={onSubmit}>
                        <input
                            type='text'
                            name='from_name'
                            placeholder='from name'
                            value={toSend.from_name}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            name='to_name'
                            placeholder='to name'
                            value={toSend.to_name}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            name='message'
                            placeholder='Your message'
                            value={toSend.message}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            name='reply_to'
                            placeholder='Your email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                        />
                        <button type='submit'>Submit </button>
                    </form>
                </div> */}

            </div>
        </div>
    )
}

export default Home