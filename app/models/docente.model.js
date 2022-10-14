module.exports = (sequelize, Sequelize) => {
    const Docente = sequelize.define("docente", {
      nombre: {
        type: Sequelize.STRING
      },
      ap: {
        type: Sequelize.STRING
      },
      am: {
        type: Sequelize.STRING
      },
      especialidad: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      sexo: {
        type: Sequelize.STRING(1)
      },
      correo: {
        type: Sequelize.STRING
      },
      clave: {
        type: Sequelize.STRING(6)
      }
    });
  
    return Docente;
  };