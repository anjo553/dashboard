const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarjeta', {
    id_tarjeta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'transaccion',
        key: 'id_transaccion'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numero_tarjeta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pin: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tipo_tarjeta: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    limite_Credito: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    saldo_actual: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    fecha_pago: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    porcentaje_interes: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    saldo_al_corte: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    facha_corte: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tarjeta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tarjeta" },
        ]
      },
    ]
  });
};
