require("dotenv").config();

const PASSWORD = process.env.PASSWORD;
const password_encoded = encodeURIComponent(PASSWORD);

console.log(`[] password encoded : ${password_encoded}`);
