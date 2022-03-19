const procedures = require("../data/procedimentos");
const grupos = require("../data/grupos");

exports.performedProceduresController = {
    getAll(req, res) {
        res.status(200).json(
            {
                "procedures": procedures,
                "groups": grupos,
            }
        );
    }
}
