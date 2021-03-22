import * as React from 'react';
import { useState, useEffect } from 'react';
import { Chirp } from './Home';
import { RouteComponentProps } from 'react-router-dom';
import Navbar from './Navbar';

const Admin: React.FC<AdminProps> = props => {

    const [ newMsgInput, setNewMsgInput ] = useState<string>('');
    const [ chirp, setChirp ] = useState<Chirp>({
        id: null,
        name: null,
        content: null
    });

    const getChirp = async () => {
        let res = await fetch(`/api/chirps/${props.match.params.id}`);
        let chirp = await res.json();
        setChirp(chirp[0]);
    };

    useEffect(() => { getChirp(); }, [props.match.params.id]);

    const handleMsgInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewMsgInput(e.target.value);
    };

    const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
        let body = {
            name: chirp.name,
            content: newMsgInput
        };
        await fetch(`/api/chirps/${props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json"
            }
        });
        props.history.push('/');
    };

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        await fetch(`/api/chirps/${props.match.params.id}`, {
            method: 'DELETE'
        });
        props.history.push('/');
    };

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.history.push('/');
    }

    return (
        <div className="container">
            <Navbar />
            <div className="row d-flex flex-wrap justify-content-center">
                <div className="col-sm-12 d-flex justify-content-center p-4">
                    <form className="form-group m-4 p-4 border rounded shadow bg-light">
                        <label>Username: </label>
                        <br/>
                        <h3 className="m-3">{chirp.name}</h3>
                        <br/>
                        <label>Chirp: </label>
                        <textarea name="" id="" cols={23} rows={4} className="m-1 p-1 form-control" defaultValue={chirp.content} onChange={ handleMsgInput } ></textarea>
                        <div className="col-sm-12 d-flex justify-content-between">
                            <button type="button" className="btn btn-link" onClick={ handleSave }>Save</button>
                            <button type="button" className="btn btn-link" onClick={ handleDelete }>Delete</button>
                            <button type="button" className="btn btn-link" onClick={ handleCancel }>Cancel</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    );
};

export interface AdminProps extends RouteComponentProps<{ id: string; }> { }

export default Admin;