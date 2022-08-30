"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRandomNumber = void 0;
let MAX_AGE = 100;
const makeRandomNumber = (max = MAX_AGE) => Math.ceil(Math.random() * max);
exports.makeRandomNumber = makeRandomNumber;
