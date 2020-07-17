const {
  client,
  createLink,
 } = require('./index');

async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    // have to make sure to drop in correct order
    await client.query(`
      DROP TABLE IF EXISTS link_tags;
      DROP TABLE IF EXISTS tags;
      DROP TABLE IF EXISTS links;
    `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Starting to build tables...");

    await client.query(`
      CREATE TABLE links (
        id SERIAL PRIMARY KEY,
        url varchar(255) UNIQUE NOT NULL,
        name varchar(255) NOT NULL,
        count INTEGER,
        comment varchar(255) NOT NULL,
        date DATE NOT NULL,

      );

      CREATE TABLE tags (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL
      );

      CREATE TABLE link_tags (
        "linkId" INTEGER REFERENCES links(id),
        "tagId" INTEGER REFERENCES tags(id),
        UNIQUE ("linkId", "tagId")
      );
    `);

    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

async function createInitialLinks() {
  try {
    console.log("Starting to create links...");

    await createLink({
      url: 'www.twitter.com',
      name: 'Twitter',
      count: 0,
      comment: 'Twitter is a social media network',
    });

    await createLink({
      url: 'www.google.com',
      name: 'Google',
      count: 0,
      comment: 'Google is a useful search engine',
    });

    await createLink({
      url: 'www.facebook.com',
      name: 'Facebook',
      count: 0,
      comment: 'Facebook is a huge social media network',
    });



    console.log("Finished creating links!");
  } catch (error) {
    console.error("Error creating links!");
    throw error;
  }
}

async function testDB() {
  try {
    client.connect();
    const result = await client.query(`
    SELECT * FROM links;
    `)
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialLinks();
    await createInitialTags();
  } catch (error) {
    console.log("Error during rebuildDB")
    throw error;
  }
}

async function testDB() {
  try {
    console.log("Starting to test database...");
    console.log.apply("Finished database tests!");
  } catch (error) {
    console.log("Error during testDB");
    throw error;
  }
}

rebuildDB()
.then(testDB)
.catch(console.error)
.finally(() => client.end());
