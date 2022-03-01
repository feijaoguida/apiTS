"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const PORT = process.env.PORT || 3000;
app_1.app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
