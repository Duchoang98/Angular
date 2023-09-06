export interface Author {
    id: number;
    firstname: string;
    lastname: string;
    email: string
}

export const authors = [
    {
        id : 1,
        firstname: 'Hoang',
        lastname : 'NGUYEN',
        email : 'duchoang@gmail.com'
    },
    {
        id: 2,
        firstname: 'Hung',
        lastname: 'Tran',
        email: 'tranhung@gmail.com'
    },
    {
        id: 3,
        firstname: 'Kien',
        lastname: 'Pham',
        email: 'phamkien@gmail.com'
    },
    {
        id: 4,
        firstname: 'Hien',
        lastname: 'Ma',
        email: 'mahien@gmail.com'
    }
]