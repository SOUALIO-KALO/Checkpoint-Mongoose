const { default: mongoose } = require("mongoose"); //import de Mongoose
const connectToDb = require("./db_connection/connection"); //import de notre connexion
const Person = require("./models/person"); // import de notre model

connectToDb(); // Ouverture la connexion

// Créer et sauvegarder un enregistrement d'un modèle:
const createPerson = () => {
  const newPerson = new Person({
    name: "kalo soualio",
    email: "kalosoualio@gmail.com",
    age: 24,
  });

  newPerson
    .save()
    .then((person) => console.log("✅ Utilisateur créé :", person))
    .catch((err) =>
      console.error("❌ Erreur lors de la création :", err.message)
    )
    .finally(() => {
      // Fermeture propre de la connexion
      mongoose.connection
        .close()
        .then(() => console.log("🔌 Connexion fermée"));
    });
};

createPerson();
