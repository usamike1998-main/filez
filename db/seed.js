import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
}

async function seed() {
  for (let i = 1; i < 4; i++) {
    const folder = await createFolder("Folder " + i);
    for (let j = 1; j < 6; j++) {
      await createFile("File " + j, 1000 * j, folder.id);
    }
  }
}
