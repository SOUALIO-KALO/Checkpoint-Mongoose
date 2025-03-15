const { default: mongoose } = require("mongoose"); //import de Mongoose
const connectToDb = require("./db_connection/connection"); //import de notre connexion
const Person = require("./models/person"); // import de notre model

connectToDb(); // Ouverture la connexion

// Supprimer un document à l'aide de model.findByIdAndRemove

const deletePersonById = (personId) => {
  Person.findByIdAndDelete(personId)
    .then((deletedPerson) => {
      if (!deletedPerson) {
        console.log(`⚠️ Aucune personne trouvée avec l'ID : ${personId}`);
        return;
      }

      console.log("✅ Personne supprimée :", deletedPerson);
    })
    .catch((error) => {
      console.error("❌ Erreur lors de la suppression :", error.message);
    })
    .finally(() => {
      // Fermeture de la connexion après l'opération
      mongoose.disconnect().then(() => {
        console.log("🔌 Connexion fermée");
      });
    });
};

// Exécuter la suppression
deletePersonById("67d2ff0605ab84683ace7940");
