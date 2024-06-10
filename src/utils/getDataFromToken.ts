// import { jwtVerify } from 'jose';

// export const tokenData = async (token: string | null) => {
//     // console.log("token:",token);

//     if (!token) {
//         console.log('No token provided');
//         return null;
//     }

//     try {
//         const { payload } = await jwtVerify(token, new TextEncoder().encode('aliean'));
//         // console.log("payload",payload);
//         return payload;
//     } catch (error) {
//         console.log('Invalid token');
//         return null;
//     }
// };

// export const userData = () => {

// };


// utils/getDataFromToken.ts
import { jwtVerify } from 'jose';
import { User } from '../utils/User';

export const tokenData = async (token: string | null): Promise<User | null> => {
    if (!token) {
        console.log('No token provided');
        return null;
    }

    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode('aliean'));
        // console.log("first", payload)
        // Assuming payload contains id, name, and email
        const userData: User = {
            id: payload._id as string,
            name: payload.userName as string,
            email: payload.email as string,
            role: payload.role as string,
        };
        return userData;
    } catch (error) {
        console.log('Invalid token');
        return null;
    }
};
