const { default: mongoose } = require("mongoose"); //import de Mongoose
const connectToDb = require("./db_connection/connection"); //import de notre connexion
const Person = require("./models/person"); // import de notre model

connectToDb(); // Ouverture la connexion

//Créer de nombreux enregistrements avec model.create()

// Tableau d'objets à insérer
const arrayOfPeople = [
  {
    name: "keita",
    email: "email10@gmail.com",
    age: 20,
    favoriteFoods: ["Riz", "Poulet"],
  },
  {
    name: "amara gbogo",
    email: "email20@gmail.com",
    age: 30,
    favoriteFoods: ["Burgers", "frits"],
  },
  {
    name: "koffi koffi",
    email: "email30@gmail.com",
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
      // Fermer la connexion
      mongoose.connection
        .close()
        .then(() => console.log("🔌 Connexion fermée"));
    });
};

// Exécution de la fonction
createPeople();
