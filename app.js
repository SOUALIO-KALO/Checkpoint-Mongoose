const connectToDb = require("./db_connection/connection");
const Person = require("./models/person");

connectToDb();

const createPerson = async () => {
  try {
    const newPerson = new Person({
      name: "Alice",
      email: "alice@example.com",
      age: 25,
    });

    const savedPerson = await newPerson.save();
    console.log("✅ Utilisateur créé :", savedPerson);
  } catch (error) {
    console.error("❌ Erreur lors de la création :", error.message);
  }
};

createPerson();
