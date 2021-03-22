import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Navbar from './Navbar';

const AddChirp: React.FC<AddChirpProps> = props => {

    const [userInput, setUserInput] = useState<string>('');
    const [msgInput, setMsgInput] = useState<string>('');

    let userid = 11;

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value)
    };

    const handleMsgInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMsgInput(e.target.value)
    }; 

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        let body = {
            name: userInput,
            content: msgInput
        };
        let res = await fetch('/api/chirps/', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json"
            }
        });
        if(res.status == 200) {
            setUserInput('');
            setMsgInput('');
            alert('Nice chirp!');
            props.history.push('/');
        } else {
            alert("This user does not exist! Try again.");
        };
    }

    return (
        <div className="container add-chirp-page">
            <Navbar />
            <div className="row d-flex justify-content-center flex-wrap">
                <div className="col-sm-5 d-flex flex-wrap justify-content-center">
                    <div className="card col-sm-12 m-4 rounded shadow bg-light">
                        <div className="card-body">
                            <input className="my-3 mx-auto" type="text" onChange={ handleUserInput } placeholder="Username:"/>
                            <br/>
                            <textarea className="my-3 mx-auto" name="chirptxt" cols={35} rows={4} onChange={ handleMsgInput } placeholder="Whatchu got?"></textarea>
                            <br/>
                            <button className="my-3 mx-auto btn btn-primary rounded" onClick={ handleSubmit }>Chirp it!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export interface AddChirpProps extends RouteComponentProps { }

export default AddChirp;