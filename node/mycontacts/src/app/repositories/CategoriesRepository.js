const db = require("../../database");

class CategoriesRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "ASC" ? "ASC" : "DESC";
    const rows = await db.query(
      `SELECT * FROM categories ORDER BY NAME ${direction}`
    );

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(
      `
      SELECT *
      FROM categories
      WHERE id = $1`,
      [id]
    );

    return row;
  }

  async update({ id, name }) {
    const [row] = await db.query(
      `
      UPDATE categories 
      SET name = $2
      WHERE id = $1
      RETURNING *`,
      [id, name]
    );

    return row;
  }

  async delete(id) {
    const [row] = await db.query(
      `
      DELETE FROM categories 
      WHERE id = $1`,
      [id]
    );

    return row;
  }

  async create(name) {
    const [row] = await db.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *",
      [name]
    );

    return row;
  }
}

module.exports = new CategoriesRepository();
