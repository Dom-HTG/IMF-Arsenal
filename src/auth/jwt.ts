import jwt from "jsonwebtoken";

export interface JWTPayload {
    username: string;
};

const jwtSecret = process.env.JWT_SECRET as string;

// generate token.
export function generateToken (payload: JWTPayload): string {
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
    return token;
};

export function verifyToken (token: string): JWTPayload {
    const payload = jwt.verify(token, jwtSecret);
    return payload as JWTPayload;
};