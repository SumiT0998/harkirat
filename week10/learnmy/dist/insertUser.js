"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const a_1 = require("./a");
function insertdata(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield a_1.client.connect();
            const insertQuery = "INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
            const values = [username, email, password];
            const res = yield a_1.client.query(insertQuery, values);
            console.log("insertion sucessfully done!", res);
        }
        catch (err) {
            console.log("error", err);
        }
        finally {
            yield a_1.client.end();
        }
    });
}
insertdata("amit", "amit@gmail.com", "12143453465");
