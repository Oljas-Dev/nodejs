"use strict";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("UserPosts", {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
    postId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Posts",
        key: "id",
      },
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("UserPosts");
}
