const productSeeder = require("./productSeeder")

const seeder = async () => {
    await productSeeder()
}

seeder().then()