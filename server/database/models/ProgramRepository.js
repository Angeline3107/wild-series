const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    // Appelle le constructeur de la classe parente (AbstractRepository)
    // et passe le nom de la table "programs" en tant que configuration
    super({ table: "program" });
  }

  async readAll() {
    // Exécute la requête SQL SELECT pour récupérer toutes les entrées de la table "programs"
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Retourne le tableau des entrées
    return rows;
  }
}

module.exports = ProgramRepository;
