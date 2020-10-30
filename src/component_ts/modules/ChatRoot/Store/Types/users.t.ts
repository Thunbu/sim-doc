export interface UserInterface {
    avatar: string,
    name: string,
    id: string,
}

export interface UsersStoreTypes {
    UserMap: {
        [key: string]: UserInterface
    }
}

// Update or add user message
export const UPDATE_USER_MESSAGE = 'UPDATE_USER_MESSAGE';
