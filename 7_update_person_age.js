const { default: mongoose } = require("mongoose"); //import de Mongoose
const connectToDb = require("./db_connection/connection"); //import de notre connexion
const Person = require("./models/person"); // import de notre model

connectToDb(); // Ouverture la connexion

//Exécuter de nouvelles mises à jour sur un document à l'aide de model.findOneAndUpdate()

const updatePersonAge = (personName) => {
  Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true })
    .then((updatedPerson) => {
      if (!updatedPerson) {
        console.log(`⚠️ Aucune personne trouvée avec le nom : ${personName}`);
        return;
      }

      console.log("✅ Personne mise à jour :", updatedPerson);
    })
    .catch((error) => {
      console.error("❌ Erreur lors de la mise à jour :", err.message);
    })
    .finally(() => {
      // Fermeture de la connexion
      mongoose.connection.close().then(() => {
        console.log("🔌 Connexion fermée");
      });
    });
};

updatePersonAge("kalo soualio");
