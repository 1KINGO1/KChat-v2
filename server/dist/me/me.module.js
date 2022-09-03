"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeModule = void 0;
const common_1 = require("@nestjs/common");
const me_controller_1 = require("./me.controller");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../db/schemas/user.schema");
const conversation_schema_1 = require("../db/schemas/conversation.schema");
const db_module_1 = require("../db/db.module");
const auth_module_1 = require("../auth/auth.module");
let MeModule = class MeModule {
};
MeModule = __decorate([
    (0, common_1.Module)({
        imports: [db_module_1.DbModule, auth_module_1.AuthModule, mongoose_1.MongooseModule.forFeature([
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: conversation_schema_1.Conversation.name, schema: conversation_schema_1.ConversationSchema }
            ])],
        controllers: [me_controller_1.MeController],
    })
], MeModule);
exports.MeModule = MeModule;
//# sourceMappingURL=me.module.js.map