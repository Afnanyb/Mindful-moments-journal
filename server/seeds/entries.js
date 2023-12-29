/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("table_name").del();
  await knex("table_name").insert([
    { id: 1, colName: "rowValue1" },
    { id: 2, colName: "rowValue2" },
    { id: 3, colName: "rowValue3" },
  ]);
};
exports.seed = function (knex) {
  return knex("entries")
    .del()
    .then(function () {
      return knex("entries").insert([
        { title: "First Entry", content: "This is my first journal entry." },
        { title: "Another Day", content: "Today was a great day!" },
      ]);
    });
};
