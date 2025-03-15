const { default: mongoose } = require("mongoose"); //import de Mongoose
const connectToDb = require("./db_connection/connection"); //import de notre connexion
const Person = require("./models/person"); // import de notre model

connectToDb(); // Ouverture la connexion

//Utilisez model.findById() pour rechercher votre base de données par _id

const findPersonById = (personId) => {
  Person.findById(personId)
    .then((doc) => {
      doc
        ? console.log(`✅ Documents trouvés : ${doc}`)
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

findPersonById("67d3b5dca1647a78392b1382");
