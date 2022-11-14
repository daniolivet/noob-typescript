import { DataSource } from "typeorm"

export const DBConfig = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "daniel.olivet",
    password: "Malaga1997//",
    database: "noobts_db",
    entities: [__dirname + "/Database/Entity/*{.js,.ts}"],
    synchronize: true,
    logging: false,
})