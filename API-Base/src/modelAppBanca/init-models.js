var DataTypes = require("sequelize").DataTypes;
var _gestiontarjetas = require("./gestiontarjetas");
var _movimiento = require("./movimiento");
var _notificacion = require("./notificacion");
var _permisos = require("./permisos");
var _roles = require("./roles");
var _rolespermisos = require("./rolespermisos");
var _sesion = require("./sesion");
var _tarjeta = require("./tarjeta");
var _transaccion = require("./transaccion");
var _usuario = require("./usuario");
var _usuariosroles = require("./usuariosroles");

function initModels(sequelize) {
  var gestiontarjetas = _gestiontarjetas(sequelize, DataTypes);
  var movimiento = _movimiento(sequelize, DataTypes);
  var notificacion = _notificacion(sequelize, DataTypes);
  var permisos = _permisos(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var rolespermisos = _rolespermisos(sequelize, DataTypes);
  var sesion = _sesion(sequelize, DataTypes);
  var tarjeta = _tarjeta(sequelize, DataTypes);
  var transaccion = _transaccion(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);
  var usuariosroles = _usuariosroles(sequelize, DataTypes);

  rolespermisos.belongsTo(permisos, { as: "id_rolpermiso_permiso", foreignKey: "id_rolpermiso"});
  permisos.hasOne(rolespermisos, { as: "rolespermiso", foreignKey: "id_rolpermiso"});
  usuariosroles.belongsTo(roles, { as: "rol", foreignKey: "rol_id"});
  roles.hasMany(usuariosroles, { as: "usuariosroles", foreignKey: "rol_id"});
  roles.belongsTo(rolespermisos, { as: "rol", foreignKey: "rol_id"});
  rolespermisos.hasOne(roles, { as: "role", foreignKey: "rol_id"});
  tarjeta.belongsTo(transaccion, { as: "id_tarjeta_transaccion", foreignKey: "id_tarjeta"});
  transaccion.hasOne(tarjeta, { as: "tarjetum", foreignKey: "id_tarjeta"});
  usuario.belongsTo(usuariosroles, { as: "id_usuario_usuariosrole", foreignKey: "id_usuario"});
  usuariosroles.hasOne(usuario, { as: "usuario", foreignKey: "id_usuario"});

  return {
    gestiontarjetas,
    movimiento,
    notificacion,
    permisos,
    roles,
    rolespermisos,
    sesion,
    tarjeta,
    transaccion,
    usuario,
    usuariosroles,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
