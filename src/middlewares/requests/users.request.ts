export const create = {
    name: ['required', 'string', 'min:3'],
    username: ['required', 'string', 'min:5', 'username_available'],
    password: ['required', 'string', 'min:5'],
    groupId: ['integer'],
}

