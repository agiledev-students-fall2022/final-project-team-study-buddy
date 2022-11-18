const mongoose = require("mongoose");
const  User  = require("./space");
const db = require("../setup/db"); //prolly wrong

const spaceData = {
  id: 420,
  name: "john doe",
  address: "bobst",
  printer: True,
  wifi: True,
  study: True,
  description: "pretty good",
  rating: 5,
};

beforeAll(async () => {
  await db.setUp();
});

afterEach(async () => {
  await db.dropCollections();
});

afterAll(async () => {
  await db.dropDatabase();
});


/**
 * User model
 */
describe("spaceData model", () => {
  it("create & save space successfully", async () => {
    const validSpace = new Space(spaceData);
    const savedSpace = await validSpace.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedSpace._id).toBeDefined();
    expect(savedSpace.name).toBe(savedSpace.name);
    expect(savedSpace.address).toBe(savedSpace.adress);
    expect(savedSpace.description).toBeDefined();
  });

  // You shouldn't be able to add in any field that isn't defined in the schema
  it("insert user successfully, but the field not defined in schema should be undefined", async () => {
    const userWithInvalidField = new User({
      ...spaceData,
      nickname: "Johnny Doughy",
    });
    const savedUserWithInvalidField = await userWithInvalidField.save();
    expect(savedUserWithInvalidField._id).toBeDefined();
    expect(savedUserWithInvalidField.name).toBeUndefined();
  });

  // It should us tell us the errors in on email field.
  it("create user without required field should failed", async () => {
    const userWithoutRequiredField = new User({ name: "Johnny" });
    let err;
    try {
      const savedSpaceWithoutRequiredField = await spaceWithoutRequiredField.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });
});