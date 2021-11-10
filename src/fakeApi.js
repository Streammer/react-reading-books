import * as data from './books-data.json'

const getData = ()=> new Promise(resolve => {
   resolve(data) 
})
export default getData