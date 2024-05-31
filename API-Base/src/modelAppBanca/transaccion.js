const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaccion', {
    id_transaccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tarjeta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipo_transaccion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fecha_transaccion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transaccion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_transaccion" },
        ]
      },
    ]
  });
};
