const intialstate = {
    icon : {}
}

const reducer = (state = intialstate, action) => {
    console.log(`Action Type ${action.type}`);
    console.log(`Action Payload ${action.payload}`);
    switch (action.type) {
        case 'SET_ICON':
            return {
                ...state,
                icon : action.payload
            };
        default:
            return state;
    }
}

export default reducer;