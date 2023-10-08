const { Sequelize } = require("sequelize");
const FakeName = require("../../DB/models/Fakename");

exports.getRandomData = async () => {
  try {
    const data = await FakeName.findOne({
      order: [[Sequelize.literal("RAND()")]],
    });
    return data.dataValues;
  } catch (error) {
    return { success: false };
  }
};
