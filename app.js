const { default: mongoose } = require("mongoose");
const connectToDb = require("./db_connection/connection");
const Person = require("./models/person");

connectToDb();

// Créer et sauvegarder un enregistrement d'un modèle:
const createPerson = () => {
  const newPerson = new Person({
    name: "kalo soualio",
    email: "kalosoualio60@gmail.com",
    age: 24,
  });

  newPerson
    .save()
    .then((person) => console.log("✅ Utilisateur créé :", person))
    .catch((err) =>
      console.error("❌ Erreur lors de la création :", err.message)
    )
    .finally(() => {
      mongoose.connection.close(); // Fermeture propre de la connexion
      console.log("🔌 Connexion MongoDB fermée.");
    });
};

// Exécuter la suppression
createPerson();

/* ------------------------------------------------------------------------------------------ */

//Créer de nombreux enregistrements avec model.create()
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

/* ------------------------------------------------------------------------------------------ */

// Utiliser model.find() pour rechercher dans votre base de données
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

// Exécuter la suppression
findPerson();

/* ------------------------------------------------------------------------------------------ */

// Utilisez model.findOne() pour renvoyer un seul document correspondant de votre base de données
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

// Exécuter la suppression
findPersonByFood("Riz");

/* ------------------------------------------------------------------------------------------ */

// Utilisez model.findById() pour rechercher votre base de données par _id
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
      mongoose.connection.close();
      console.log(`🔌Connection fermée`);
    });
};

// Exécuter la suppression
findPersonById("67d3b5dca1647a78392b1382");

/* ------------------------------------------------------------------------------------------ */

// Exécutez des mises à jour classiques en exécutant Find, Edit, puis Save
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
          mongoose.disconnect().then(() => console.log("🔌 Connexion fermée"));
        });
    })
    .catch((error) => {
      console.error("❌ Erreur lors de la mise à jour :", err.message);
    });
};

// Exécuter la suppression
updateFavoriteFoods("67d2ff82d85bbc51abe7eca9");

/* ------------------------------------------------------------------------------------------ */

// Exécuter de nouvelles mises à jour sur un document à l'aide de model.findOneAndUpdate()
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
      // Fermeture de la connexion après l'opération
      mongoose.connection.close().then(() => {
        console.log("🔌 Connexion fermée");
      });
    });
};

// Exécuter la suppression
updatePersonAge("kalo soualio");

/* ------------------------------------------------------------------------------------------ */

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
      mongoose.disconnect();
      console.log("🔌 Connexion fermée");
    });
};

// Exécuter la suppression
deletePersonById("67d2ff0605ab84683ace7940");

/* ------------------------------------------------------------------------------------------ */

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
      // Fermeture propre de la connexion après l'opération
      mongoose.connection.close();
      console.log("🔌 Connexion fermée");
    });
};

// Exécuter la suppression
deleteManyPeople();

/* ------------------------------------------------------------------------------------------ */

// Assistants de requête de recherche en chaîne pour affiner les résultats
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
