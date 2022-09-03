export declare class AuthService {
    createToken(login: string): Promise<any>;
    verifyToken(token: string): Promise<any>;
}
