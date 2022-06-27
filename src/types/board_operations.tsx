export type BoardOperations = { 
    card: { 
        edit: Function, 
        move: Function, 
        add: Function, 
        delete: Function },
    board: {
        add: Function,
        view: Function
    } };