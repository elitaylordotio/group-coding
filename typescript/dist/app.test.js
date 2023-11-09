"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.test.ts
const app_1 = require("./app");
test('adds 1 + 2 to equal 3', () => {
    expect((0, app_1.add)(1, 2)).toBe(3);
});
