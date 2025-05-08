const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Inscripcion = sequelize.define("Inscripcion", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellidos: { type: DataTypes.STRING, allowNull: false },
  tipo_documento: { type: DataTypes.STRING, allowNull: false },
  documento: { type: DataTypes.STRING, allowNull: false, unique: true },
  licencia: { type: DataTypes.STRING, allowNull: true },
  prueba: { type: DataTypes.STRING, allowNull: false },
  categoria: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  telefono: { type: DataTypes.STRING, allowNull: false },
  fecha_nacimiento: { type: DataTypes.DATE, allowNull: false },
  fecha_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

(async () => {
  await sequelize.sync();
})();

module.exports = Inscripcion;
