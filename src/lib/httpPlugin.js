import axios from "axios"
const $http={}
const instance =axios.create({
    timeout:10000
})