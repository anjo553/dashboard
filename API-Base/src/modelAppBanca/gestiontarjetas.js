const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gestiontarjetas', {
    gestion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tarjeta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado_anterior: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    estado_nuevo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    tipo_gestion: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fecha_gestion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gestiontarjetas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gestion_id" },
        ]
      },
    ]
  });
};
