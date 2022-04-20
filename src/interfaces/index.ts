interface IUser {
    name: string,
    username: string,
    password: string,
    student?: IStudent
}

interface IGroup {
    description: string
}

interface IStudent {
    ecoins: number
}