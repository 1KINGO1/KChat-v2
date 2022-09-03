import { DbService } from '../db/db.service';
import { AuthService } from '../auth/auth.service';
import CreateConversation from './dto/CreateConversation';
export declare class MeController {
    private dbService;
    private authService;
    constructor(dbService: DbService, authService: AuthService);
    getAllConversations(req: any, res: any): Promise<any>;
    createConversation(req: any, res: any, body: CreateConversation): Promise<any>;
}
