import axios from 'axios'

export const setInitialDataAction = (payload) => {
    return {
        type: 'SETINITIALDATA',
        payload: payload
    }
}

export const getCryptoDataApiCallAction = () => {

    return (dispatch) => {
        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=2&convert=USD&CMC_PRO_API_KEY=0ccfaa01-1f3f-4f64-9aba-c00b1b19f871')
            .then(response => {
                return dispatch(setInitialDataAction(response.data.data))
            })
            .catch(err => console.log(err));
    }

}