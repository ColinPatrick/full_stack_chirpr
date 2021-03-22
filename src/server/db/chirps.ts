import { Query } from './index';

const all = async () => Query('SELECT chirps.id, users.name, chirps.content FROM chirps JOIN users on users.id = chirps.userid ORDER BY chirps.id');
const one = async (chirpid: number) => Query('SELECT users.name, chirps.content FROM chirps JOIN users on users.id = chirps.userid WHERE chirps.id = ?', [chirpid]);
const getUser = async (userName: string) => Query('SELECT users.id FROM users WHERE users.name = ?', [userName]);
const insert = async (data: any) => Query(`insert into chirps (userid, content, location) values(${data.userid}, "${data.content}", "unknown")`);
const insertUser = async (username: string) => Query('insert into users (name) values(?)', [username]);
const update = async (data: any) => Query(`UPDATE chirps set content = "${data.newChirp}" where id = ${data.id}`);
const deleteChirp = async (chirpid: number) => Query('DELETE FROM chirps WHERE id = ?', [chirpid]);

export default {
    all, 
    one,
    getUser,
    insert,
    insertUser,
    update,
    deleteChirp
}