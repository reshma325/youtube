import axios from 'axios'
var BackEndURL='http://localhost:8000/api/v1'

const api=axios.create({baseURL:BackEndURL});
export default api;