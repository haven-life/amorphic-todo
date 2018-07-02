"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var amorphic_1 = require("amorphic");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.serverInit = function () {
        console.log('hello world server init fired');
    };
    Controller = __decorate([
        amorphic_1.supertypeClass
    ], Controller);
    return Controller;
}());
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map