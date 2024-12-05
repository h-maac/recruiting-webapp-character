import axios from "axios";

const GITHUB_HANDLE = 'h-maac';
const BASE_URL = `https://recruiting.verylongdomaintotestwith.ca/api/{${GITHUB_HANDLE}}`;


const loadData = async () =>
    axios.get(BASE_URL + '/character')
        .then(function (response) {
            alert("character response\n" + JSON.stringify(response.data.body.characters, null, 4));
        })
        .catch(function (error) {
            console.log(error);
        });


const saveData = async (data: any) =>
    axios.post(BASE_URL + '/character', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

export default {saveData, loadData};