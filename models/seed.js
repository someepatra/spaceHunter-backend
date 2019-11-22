const mongoose = require("mongoose");
const RentalModel = require("./rentalSchema");

//SEED DATA
const seedRental = [
  {
    owner: "Carmen P.",
    city: "Tampa",
    state: "Florida",
    country: "USA",
    price: 500,
    contactInfo: "cperez123@gmail.com",
    occupancy: "4-5 people",
    like: 0,
    description:
      "Beautiful condo on the water great for a friends trip or get quick get away. Located 10 mins from the airport, central to downtown, must see! Pets: Allowed",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    available: true
  },
  {
    owner: "Mausumi P.",
    city: "San Fransisco",
    state: "California",
    country: "USA",
    price: 400,
    contactInfo: "213-202-4444",
    occupancy: "3 people",
    like: 3,
    description:
      "Excellent condo in the heart of San Fran! Close to public transporation. Things to do in the area: walk the golden gate bridge, go to fisherman's wharf, alcatraz, and visit some of the best restaurants in the world. Breakfast: Included Pets: Not Allowed ",
    image:
      "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    available: true
  },
  {
    owner: "Justin K.",
    city: "London",
    state: "",
    country: "England",
    price: 2000,
    contactInfo: "Justinemail@hotmail.com",
    occupancy: "100-250 people",
    like: 10,
    description:
      "Event space perfect for weddings, corporate events, private parties. We offer on site catering, tables, chairs, 40 inch tv displays, fully stocked bar, and meeting rooms. Come host your next corporate event with us!",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    available: true
  },
  {
    owner: "John D.",
    city: "Miami",
    state: "Florida",
    country: "USA",
    price: 250,
    contactInfo: "222-222-2222",
    occupancy: "2 people",
    like: 10,
    description:
      "Apartment available for extended rent, NOT A SHORT STAY rental. Serious inquiries only",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80",
    available: true
  },
  {
    owner: "Sally S.",
    city: "Portland",
    state: "Oregon",
    country: "USA",
    price: 400,
    contactInfo: "test@gmail.com",
    occupancy: "100 people",
    like: 4,
    description: "Event space available for weddings ONLY.",
    image:
      "https://images.unsplash.com/photo-1562664377-709f2c337eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    available: true
  }
];

const seedDB = () => {
  // Declare db name, URI, and instantiate connection
  const dbName = "rental";
  const dbURI = `mongodb://localhost:27017/${dbName}`;

  const dbConnection = mongoose.connection;

  dbConnection.on("error", err => console.log("DB Connection Error: ", err));

  dbConnection.on("connected", () => console.log("DB Connected to: ", dbURI));

  dbConnection.on("disconnected", () => console.log("DB Disconnected"));

  mongoose.connect(dbURI, { useNewUrlParser: true }, () =>
    console.log(`${dbName} db running on ${dbURI}`)
  );

  RentalModel.create(seedRental, (err, newRentals) => {
    if (err) {
      console.log("Seeding error: ", err);
    } else {
      console.log("Seeding OK: ", newRentals);
    }
    dbConnection.close();
  });
};
seedDB();
module.exports = seedRental;
