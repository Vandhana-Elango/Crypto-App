const initialListingValue = []

const listingReducer = (state = initialListingValue, action) => {

    switch (action.type) {
        case 'UPDATE':
            return action.payload;
            break;
        case 'SETINITIALDATA':
            return action.payload
            break;
        default:
            return state
            break;
    }

}

export default listingReducer