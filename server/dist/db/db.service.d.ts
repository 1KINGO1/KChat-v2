import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import UserDto from './dto/UserDto';
import { Conversation, ConversationDocument } from './schemas/conversation.schema';
export declare class DbService {
    private userModel;
    private conversationModel;
    constructor(userModel: Model<UserDocument>, conversationModel: Model<ConversationDocument>);
    create(user: UserDto): Promise<{
        err: boolean;
        message: unknown;
        data: any;
    }>;
    findUserByLogin(login: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findUserById(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findConversationWithUser(userId: string): Promise<any>;
    findConversationById(id: string): Promise<Conversation & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createConversation(userId1: string, userId2: string): Promise<{
        err: boolean;
        message: unknown;
        data: any;
    }>;
    getMessages(conversationId: string): Promise<{
        _id: string;
        content: string;
        author: {
            login: string;
            avatar: string;
            _id: string;
        };
    }[]>;
    createMessage(conversationId: string, _id: string, messageBody: string, author: {
        login: string;
        avatar: string;
        _id: string;
    }): Promise<boolean>;
}
