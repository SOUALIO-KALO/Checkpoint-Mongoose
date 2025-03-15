const { default: mongoose } = require("mongoose"); //import de Mongoose
const connectToDb = require("./db_connection/connection"); //import de notre connexion
const Person = require("./models/person"); // import de notre model

connectToDb(); // Ouverture la connexion

// MongoDB et Mongoose - Supprimer de nombreux documents avec model.remove()

const deleteManyPeople = () => {
  Person.deleteMany({ name: "kalo soualio" })
    .then((result) => {
      console.log("✅ Résultat de la suppression :", result);
    })
    .catch((error) => {
      console.error("❌ Erreur lors de la suppression :", error.message);
    })
    .finally(() => {
      // Fermeture de la connexion après l'opération
      mongoose.connection
        .close()
        .then(() => console.log("🔌 Connexion fermée"));
    });
};

// Exécuter la suppression
deleteManyPeople();
