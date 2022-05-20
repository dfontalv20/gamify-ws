export const create = {
    name: ['required', 'string', 'min:3'],
    ecoins: ['required', 'integer', 'min:0'],
    photo: ['url']
}
