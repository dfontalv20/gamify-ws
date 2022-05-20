export interface IUser {
    name: string
    username: string
    password: string
    groupId?: number
}

export interface IGroup {
    description: string
}

export interface IStudent {
    ecoins: number
    groupId: number
    companyId: number
}

export interface ICompany {
    name: string
    photo?: string
    students: number[]
    groupId: number
}

export interface IReward {
    name: string
    photo?: string
    ecoins: number
}