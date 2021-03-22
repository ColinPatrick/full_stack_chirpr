import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export interface HomeProps { }

export interface Chirp {
    id: string,
    name: string,
    content: string
 }

const Home: React.FC<HomeProps> = props => {

    const [chirps, setChirps] = useState<Chirp[]>([]);

    const getChirps = async () => {
        let res = await fetch('/api/chirps');
        let data = await res.json();
        let chirps = Object.keys(data).map(key => ({
           id: data[key].id,
           name: data[key].name,
           content: data[key].content 
        }))
        chirps.reverse();
        setChirps(chirps);
    };

    useEffect(() => {
        getChirps();
    }, []);

    return (
        <div className="container">
            <Navbar />
            <div className="row d-flex flex-wrap justify-content-center">
                <div className="col-sm-5 d-flex flex-wrap justify-content-center">
                    
                    {chirps.map(chirp => (
                        <div className="card col-12 m-4 rounded shadow" key={chirp.id}>
                            <div className="card-body">
                                <h5 className="card-title chirp-text">{chirp.name}</h5>
                                <hr/>
                                <p className="card-text chirp-text">{chirp.content}</p>
                                <div className="col-sm-12 d-flex justify-content-end">
                                    <Link to={`/${chirp.id}/admin`} className="btn btn-link card-link">Admin</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default Home;