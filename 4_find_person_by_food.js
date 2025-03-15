const { default: mongoose } = require("mongoose"); //import de Mongoose
const connectToDb = require("./db_connection/connection"); //import de notre connexion
const Person = require("./models/person"); // import de notre model

connectToDb(); // Ouverture la connexion

//Utilisez model.findOne() pour renvoyer un seul document correspondant de votre base de données
const findPersonByFood = (food) => {
  Person.findOne({ favoriteFoods: food })
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

findPersonByFood("Riz");
