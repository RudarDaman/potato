const db = require('../../_helpers/db');
const PotatoType = db.PotatoType;

module.exports = {
    getAll,
    add,
    delete: _delete
};

async function getAll() {
    return await PotatoType.find();
}

async function add(req) {
    const potatoType = new PotatoType({
        name: req.name
    });
    return await potatoType.save();
}

async function _delete(id) {
    return await PotatoType.findOneAndDelete({_id: id});
}
