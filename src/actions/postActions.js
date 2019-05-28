// action creator - function that generates an acton object

export const deletePost = (id) => {
    // return action object for dispatcher
    return {
        type: 'DELETE_POST',
        id: id
        

    }
}