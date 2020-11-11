import axios from 'axios'
import { context as c } from '../../../context'


export const cheeseService = {
    getAll
};

async function getAll() {
    const req = {
        method: c.get,
        url: 'localhost:8080/api/cheese',
        data: {cheese}
    }
    const resp = await axios(req)

    const data = resp.data

    alert(' connection is successful !')
    return data
}
