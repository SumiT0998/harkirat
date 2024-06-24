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
function joins(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield a_1.client.connect();
            const query = `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1`;
            const result = yield a_1.client.query(query, [userid]);
            if (result.rows.length > 0) {
                console.log("User and address found:", result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log("No user or address found with the given ID.");
                return null;
            }
        }
        catch (err) {
            console.log(err);
        }
        finally {
            yield a_1.client.end();
        }
    });
}
joins("2");
