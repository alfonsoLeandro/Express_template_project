import jwt from 'jsonwebtoken';

const generateJWT = (uid: string) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid
        };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY || '', {
            expiresIn: process.env.JWT_EXPIRE || '1h'
        }, (err, token) => {
            if (err) {
                console.error(err);
                reject('Could not generate the JWT');
            } else {
                resolve(token);
            }
        });
    });
};

export default generateJWT;
