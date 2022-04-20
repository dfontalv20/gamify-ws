interface IUser {
    name: string
    username: string
    password: string
    student?: IStudent
}

interface IGroup {
    description: string
}

interface IStudent {
    ecoins: number
    groupId: number
    companyId: number
}

interface ICompany {
    name: string
    photo?: string
    students: number[]
    groupId: number
}