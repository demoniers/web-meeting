const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const News = sequelize.define("News", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

(async () => {
  await sequelize.sync();
})();

module.exports = News;
