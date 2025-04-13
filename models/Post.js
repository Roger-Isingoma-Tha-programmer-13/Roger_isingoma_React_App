const { DataTypes } = require("sequelize");

module.exports = (sequelize, Datatypes) => {

    const Posts = sequelize.define("Posts", {

        title : {

            type: Datatypes.STRING,
            allowNull : false,
        },

        postText: {

            type: Datatypes.STRING,
            allowNull: false,
        },

        username: {

            type: DataTypes.STRING,
            allowNull: false,

        },

    });

    return Posts;

}