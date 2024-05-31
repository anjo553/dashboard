const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolespermisos', {
    id_rolpermiso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'permisos',
        key: 'permiso_id'
      }
    },
    permiso_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rolespermisos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_rolpermiso" },
        ]
      },
      {
        name: "permiso_id",
        using: "BTREE",
        fields: [
          { name: "permiso_id" },
        ]
      },
    ]
  });
};
