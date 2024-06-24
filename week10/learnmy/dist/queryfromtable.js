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
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            a_1.client.connect();
            const query = "SELECT * FROM users WHERE email=$1";
            const value = [email];
            const result = yield a_1.client.query(query, value);
            if (result.rows.length > 0) {
                console.log("User found:", result.rows[0]); // Output user data
                return result.rows[0]; // Return the user data
            }
            else {
                console.log("No user found with the given email.");
                return null; // Return null if no user was found
            }
        }
        catch (err) {
            console.log("error during fetching data", err);
        }
        finally {
            yield a_1.client.end();
        }
    });
}
getUser("sumit@gmail.com");
