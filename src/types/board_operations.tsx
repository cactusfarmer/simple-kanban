export type BoardOperations = { 
    card: { 
        update: Function, 
        move: Function, 
        add: Function, 
        delete: Function },
    board: {
        add: Function
    } };