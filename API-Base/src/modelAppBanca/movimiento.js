const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movimiento', {
    id_movimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tarjeta: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tipo_movimiento: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    monto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    fecha_movimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'movimiento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_movimiento" },
        ]
      },
    ]
  });
};
