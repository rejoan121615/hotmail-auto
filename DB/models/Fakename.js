const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const FakeName = sequelize.define(
  "fakenames",
  {
    gender: DataTypes.STRING(6),
    number: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameset: DataTypes.STRING(25),
    title: DataTypes.STRING(6),
    givenname: DataTypes.STRING(20),
    middleinitial: DataTypes.STRING(1),
    surname: DataTypes.STRING(23),
    streetaddress: DataTypes.STRING(100),
    city: DataTypes.STRING(100),
    state: DataTypes.STRING(22),
    statefull: DataTypes.STRING(100),
    zipcode: DataTypes.STRING(15),
    country: DataTypes.STRING(2),
    countryfull: DataTypes.STRING(100),
    emailaddress: DataTypes.STRING(100),
    username: DataTypes.STRING(25),
    password: DataTypes.STRING(25),
    browseruseragent: DataTypes.STRING(255),
    telephonenumber: DataTypes.TEXT,
    telephonecountrycode: DataTypes.INTEGER,
    maidenname: DataTypes.STRING(20),
    birthday: DataTypes.STRING(10),
    age: DataTypes.INTEGER,
    tropicalzodiac: DataTypes.STRING(11),
    cctype: DataTypes.STRING(10),
    ccnumber: DataTypes.STRING(16),
    CVV2: DataTypes.STRING(3),
    ccexpires: DataTypes.STRING(10),
    nationalid: DataTypes.STRING(20),
    upstracking: DataTypes.STRING(24),
    westernunionmtcn: DataTypes.CHAR(10),
    moneygrammtcn: DataTypes.CHAR(8),
    color: DataTypes.STRING(6),
    occupation: DataTypes.STRING(70),
    company: DataTypes.STRING(70),
    vehicle: DataTypes.STRING(255),
    domain: DataTypes.STRING(70),
    bloodtype: DataTypes.STRING(3),
    pounds: DataTypes.STRING(5),
    kilograms: DataTypes.STRING(5),
    feetinches: DataTypes.STRING(6),
    centimeters: DataTypes.STRING(3),
    guid: DataTypes.STRING(36),
    latitude: DataTypes.FLOAT(10, 6),
    longitude: DataTypes.FLOAT(10, 6),
  },
  {
    timestamps: false, // Disable timestamps (createdAt and updatedAt fields)
  }
);

module.exports = FakeName;
