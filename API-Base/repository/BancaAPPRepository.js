const { main } = require('../components/regularConnection');
const { executeSpWithConn, executeQuery } = require('../components/customRepository');

let customerRepository = function () {

    
    let getTerm = async (params) => {

        return await executeSpWithConn(main, SP_GetTerm(?), params);
    }
    let updateTerm = async (params) => {

        return await executeSpWithConn(main, SP_UpdateTerm(?,?), params);
    }
    let createTerm = async (params) => {

        return await executeSpWithConn(main, SP_CreateTerm(?,?), params);
    }

    return {
        getTerm: getTerm,
        updateTerm:updateTerm,
        createTerm:createTerm,
    }
}

module.exports = customerRepository()