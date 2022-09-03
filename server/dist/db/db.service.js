"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_2 = require("mongoose");
const responseMessage_1 = require("../utils/responseMessage");
const conversation_schema_1 = require("./schemas/conversation.schema");
let DbService = class DbService {
    constructor(userModel, conversationModel) {
        this.userModel = userModel;
        this.conversationModel = conversationModel;
    }
    async create(user) {
        let findUser = await this.findUserByLogin(user.login);
        if (findUser) {
            return (0, responseMessage_1.default)(true, 'User with this login already exits!');
        }
        try {
            const newUser = new this.userModel(Object.assign(Object.assign({}, user), { totalMessages: 0, avatar: null, lastOnline: null }));
            await newUser.save();
            return (0, responseMessage_1.default)(false, 'OK');
        }
        catch (e) {
            return (0, responseMessage_1.default)(true, 'Unknown error');
        }
    }
    async findUserByLogin(login) {
        try {
            return this.userModel.findOne({ login });
        }
        catch (e) {
        }
    }
    async findUserById(id) {
        try {
            return this.userModel.findById(id);
        }
        catch (e) {
        }
    }
    async findConversationWithUser(userId) {
        let allConversations = await this.conversationModel.find({});
        let copy = JSON.parse(JSON.stringify(allConversations));
        return copy.filter(conversation => conversation.users.some(user => user._id == userId));
    }
    async findConversationById(id) {
        return this.conversationModel.findById(id);
    }
    async createConversation(userId1, userId2) {
        const user1 = await this.userModel.findById(userId1);
        const user2 = await this.userModel.findById(userId2);
        const conversation = new this.conversationModel({
            createDate: new Date(),
            users: [
                { login: user1.login, avatar: user1.avatar, _id: user1._id },
                { login: user2.login, avatar: user2.avatar, _id: user2._id }
            ],
            messages: []
        });
        await conversation.save();
        return (0, responseMessage_1.default)(false, 'OK');
    }
    async getMessages(conversationId) {
        const conversation = await this.findConversationById(conversationId);
        if (!conversation)
            return;
        return conversation.messages;
    }
    async createMessage(conversationId, _id, messageBody, author) {
        const conversation = await this.findConversationById(conversationId);
        if (!conversation)
            return;
        conversation.messages = [...conversation.messages, {
                _id,
                content: messageBody,
                author: {
                    login: author.login,
                    avatar: author.avatar,
                    _id: author._id
                }
            }];
        await conversation.save();
        return true;
    }
};
DbService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(conversation_schema_1.Conversation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], DbService);
exports.DbService = DbService;
//# sourceMappingURL=db.service.js.map