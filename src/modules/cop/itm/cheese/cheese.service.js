import axios from 'axios'
import { context as c } from '../../../context'


export const cheeseService = {
    getAll
};

async function getAll() {
    const req = {
        method: c.get,
        url: 'http://192.168.0.5:8080/api/cheeses',
        // data: {cheeses}
    }
    const resp = await axios(req)

    const data = resp.data

    alert(' connection is successful !')
    return data
}
