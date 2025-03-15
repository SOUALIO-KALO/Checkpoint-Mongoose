const { default: mongoose } = require("mongoose"); //import de Mongoose
const connectToDb = require("./db_connection/connection"); //import de notre connexion
const Person = require("./models/person"); // import de notre model

connectToDb(); // Ouverture la connexion

//Exécutez des mises à jour classiques en exécutant Find, Edit, puis Save

const updateFavoriteFoods = (personId) => {
  Person.findById(personId)
    .then((doc) => {
      if (!doc) {
        return console.log(
          `⚠️ Aucune personne trouvée avec l'ID : ${personId}`
        );
      }

      // Ajout de "hamburger" aux favoriteFoods
      doc.favoriteFoods.push("hamburger");

      //Sauvegarde de la m-à-j
      doc
        .save()
        .then((updatedDoc) => {
          console.log(`✅ Document mis à jour :`, updatedDoc);
        })
        .finally(() => {
          // ✅ On ferme la connexion après les opérations
          mongoose.connection
            .close()
            .then(() => console.log("🔌 Connexion fermée"));
        });
    })
    .catch((error) => {
      console.error("❌ Erreur lors de la mise à jour :", err.message);
    });
};

updateFavoriteFoods("67d2ff82d85bbc51abe7eca9");
