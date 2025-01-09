export const editRequests = (str: string):string => {
    return str.split(' ').map(item => item.trim().toLowerCase()).filter(item => item.trim() !== '').join('+')
}