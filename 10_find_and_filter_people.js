const { default: mongoose } = require("mongoose"); //import de Mongoose
const connectToDb = require("./db_connection/connection"); //import de notre connexion
const Person = require("./models/person"); // import de notre model

connectToDb(); // Ouverture la connexion

// Assistants de requête de recherche en chaîne pour affiner les résultats */

const findAndFilterPeople = () => {
  Person.find({ favoriteFoods: "Riz" }) // Trouver les personnes qui aiment les burritos
    .sort({ name: 1 }) // Trier par nom (ordre croissant)
    .limit(2) // Limiter à 2 résultats
    .select("-age") // Exclure l'âge des résultats
    .exec() // Exécuter la requête
    .then((people) => {
      console.log("✅ Résultats de la recherche :", people);
    })
    .catch((error) => {
      console.error("❌ Erreur lors de la recherche :", error.message);
    })
    .finally(() => {
      mongoose.disconnect().then(() => {
        console.log("🔌 Connexion fermée");
      });
    });
};

// Exécuter la requête
findAndFilterPeople();
