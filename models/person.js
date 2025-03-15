const mongoose = require("mongoose"); // import de mongoose

// Définition du schéma pour une personne
const personSchema = new mongoose.Schema(
  {
    name: {
      type: String, // Champ de type String (chaîne de caractères)
      required: true, // Champ obligatoire
    },
    age: {
      type: Number, // Champ de type Number (nombre)
      default: 18, // l'age par défaut
    },
    email: {
      type: String, // Champ de type String (chaîne de caractères)
      required: true, // Champ obligatoire
      // unique: true, // Champ unique
    },
    favoriteFoods: {
      type: [String], // Champ de type tableau contenant des chaînes de caractères (array of strings)
      default: ["Riz", "Poulet"], // plats par défaut
    },
  },
  { timestamps: true } // Ajoute automatiquement les champs "createdAt" et "updatedAt"
);

// Création du modèle basé sur le schéma personSchema
const person = mongoose.model("Person", personSchema);

// Exporter le modèle pour l'utiliser dans app.js
module.exports = person;
