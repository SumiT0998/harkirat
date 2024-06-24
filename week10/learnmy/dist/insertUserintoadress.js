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
function insertAdressData(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield a_1.client.connect();
            const insertquery = "INSERT INTO addresses(user_id, city, country, street, pincode) VALUES ($1,$2,$3,$4,$5)";
            const values = [user_id, city, country, street, pincode];
            const res = yield a_1.client.query(insertquery, values);
            console.log("insertion sucessfull at table adress", res);
        }
        catch (err) {
            console.log("eroor in insertion", err);
        }
        finally {
            yield a_1.client.end();
        }
    });
}
// insertAdressData(1, "New York", "USA", "123 Broadway St", "10001");
insertAdressData(2, "delhi", "IND", "123 punjabi bagh ", "248001");
