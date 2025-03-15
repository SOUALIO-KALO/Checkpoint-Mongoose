const { default: mongoose } = require("mongoose"); //import de Mongoose
const connectToDb = require("./db_connection/connection"); //import de notre connexion
const Person = require("./models/person"); // import de notre model

connectToDb(); // Ouverture la connexion

//Utiliser model.find() pour rechercher dans votre base de données
const findPerson = () => {
  Person.find({ name: "Kalo soualio" })
    .then((docs) => {
      docs.length > 0
        ? console.log(`✅ Documents trouvés : ${docs}`)
        : console.log(`⚠️ Aucun document trouvé pour cette recherche`);
    })
    .catch((err) => {
      console.error(`❌ Erreur de recherche : ${err.message}`);
    })
    .finally(() => {
      // Fermeture de la connexion après l'opération
      mongoose.connection
        .close()
        .then(() => console.log("🔌 Connexion fermée"));
    });
};

findPerson();
