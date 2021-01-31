"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var PostRouter_1 = __importDefault(require("./routes/PostRouter"));
var UserRouter_1 = __importDefault(require("./routes/UserRouter"));
var HealthcheckRouter_1 = __importDefault(require("./routes/HealthcheckRouter"));
var Router = (function () {
    function Router() {
        this.swaggerUi = require('swagger-ui-express');
        this.swaggerDocument = require('./swagger.json');
        this.route = express_1["default"]();
        return this.routes();
    }
    Router.prototype.healthcheck = function () {
        return HealthcheckRouter_1["default"];
    };
    Router.prototype.user = function () {
        return UserRouter_1["default"];
    };
    Router.prototype.post = function () {
        return PostRouter_1["default"];
    };
    Router.prototype.swagger = function () {
        return [
            this.route.use('/swagger', this.swaggerUi.serve),
            this.route.get('/swagger', this.swaggerUi.setup(this.swaggerDocument))
        ];
    };
    Router.prototype.routes = function () {
        return [
            this.healthcheck(),
            this.user(),
            this.post(),
            this.swagger(),
        ];
    };
    return Router;
}());
exports["default"] = Router;
