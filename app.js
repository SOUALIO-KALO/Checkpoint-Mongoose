const { default: mongoose } = require("mongoose");
const connectToDb = require("./db_connection/connection");
const Person = require("./models/person");

connectToDb();
// Créer et sauvegarder un enregistrement d'un modèle:
/* const createPerson = () => {
  const newPerson = new Person({
    name: "kalo soualio",
    email: "kalosoualio61@gmail.com",
    age: 24,
  });

  newPerson
    .save()
    .then((doc) => console.log("✅ Utilisateur créé :", doc))
    .catch((err) =>
      console.error("❌ Erreur lors de la création :", err.message)
    )
    .finally(() => {
      mongoose.connection.close(); // Fermeture propre de la connexion
      console.log("🔌 Connexion MongoDB fermée.");
    });
};

createPerson();
 */

/* Créer de nombreux enregistrements avec model.create()
// Tableau d'objets à insérer
const arrayOfPeople = [
  {
    name: "Kalo",
    email: "email1@gmail.com",
    age: 20,
    favoriteFoods: ["Riz", "Poulet"],
  },
  {
    name: "Alpha",
    email: "email2@gmail.com",
    age: 30,
    favoriteFoods: ["Burgers", "frits"],
  },
  {
    name: "Benie",
    email: "email3@gmail.com",
    age: 22,
    favoriteFoods: ["Foutou", "Salade"],
  },
];

// Fonction pour insérer plusieurs personnes
const createPeople = () => {
  Person.create(arrayOfPeople)
    .then((doc) => {
      console.log("✅ Personnes ajoutées :", doc);
    })
    .catch((err) => {
      console.error("❌ Erreur lors de l'ajout :", err.message);
    })
    .finally(() => {
      mongoose.connection.close(); // Fermer la connexion après l'opération
      console.log("🔌 Connexion MongoDB fermée.");
    });
};

// Exécution de la fonction
createPeople();
*/

/* Utiliser model.find() pour rechercher dans votre base de données 
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
      mongoose.connection.close();
      console.log(`🔌Connection fermée`);
    });
};

findPerson();
*/

/* Utilisez model.findOne() pour renvoyer un seul document correspondant de votre base de données */
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
      mongoose.connection.close();
      console.log(`🔌Connection fermée`);
    });
};

findPersonByFood("Riz");
