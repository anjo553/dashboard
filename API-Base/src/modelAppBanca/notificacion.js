const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificacion', {
    id_notificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mensaje: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fecha_envio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    estado_varchar: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'notificacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_notificacion" },
        ]
      },
    ]
  });
};
