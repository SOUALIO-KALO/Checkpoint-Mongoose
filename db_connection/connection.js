const mongoose = require("mongoose"); // Import de Mongoose
require("dotenv").config(); // Charge les variables d'environnement depuis un fichier .env

const databaseName = "restaurant"; // Nom de la base de données

// Définition de l'option de connection
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: databaseName,
};

// Fonction asynchrone pour se connecter à MongoDB
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, option);
    console.log(`✅ connection réussie à la db`);
  } catch (error) {
    console.log(`❌ Erreur de connection à la db : ${error.message}`);
    process.exit(1); // Arrête l'exécution en cas d'erreur critique
  }
};

// Export de la connection pour l'utiliser ailleurs (app.js)
module.exports = connectToDb;
