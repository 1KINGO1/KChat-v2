import { DbService } from '../db/db.service';
import { AuthService } from '../auth/auth.service';
export declare class UserController {
    private dbService;
    private authService;
    constructor(dbService: DbService, authService: AuthService);
    getUser(id: any, res: any): Promise<any>;
}
