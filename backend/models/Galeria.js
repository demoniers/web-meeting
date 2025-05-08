const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Galeria = sequelize.define("Galeria", {
  titulo: { type: DataTypes.STRING, allowNull: false },
  archivo: { type: DataTypes.STRING, allowNull: false },
  tipo: { type: DataTypes.STRING, allowNull: false }, // "imagen" o "video"
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

(async () => {
  await sequelize.sync();
})();

module.exports = Galeria;
