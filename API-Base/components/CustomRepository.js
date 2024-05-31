const util = require('util');

exports.Execute_sp = async(conn, sp, params)=>{
    try {
        const sql_qry = util.promisify(conn.query).bind(conn);
        let parametros = Object.keys(params).reduce((arreglo, llave)=>{
            arreglo.push(params[llave]);
            return arreglo;
        },[])
        let result = await sql_qry(`call ${sp}`,parametros);
        return result;
    } catch (error) {
        console.log("error en la ejecucion del query, definicion:", error);
        throw error;
    }
}

exports.executeSpWithConn = async (conn, storedProcedure, params) => {
  try {
    // node native promisify
    const query = util.promisify(conn.query).bind(conn)

    // Get array of parameters from object
    let paramsArray = Object.keys(params).reduce((array, key) => {
      array.push(params[key])
      return array
    }, [])
    // Execute stored procedure call
    let result = await query(CALL ${storedProcedure}, paramsArray)

    return result
  } catch (error) {
    console.error(error)
    throw error
  }
}
exports.executeSpWithConnarr = async (conn, storedProcedure, params) => {
  try {
    // node native promisify
    const query = util.promisify(conn.query).bind(conn)

    // Get array of parameters from object
    let paramsArray = Object.keys(params).reduce((array, key) => {
      array.push(params[key])
      return array
    }, [])
    // Execute stored procedure call
    let result = await query(CALL ${storedProcedure}, [params])

    return result
  } catch (error) {
    console.error(error)
    throw error
  }
}

exports.executeQuery = async(conn, query, params) => {
    const queryPromise = util.promisify(conn.query).bind(conn);
    return await queryPromise(query, params);
}