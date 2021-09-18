// Inícialização do Database
  
const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        // Campo das salas // 
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);
        
        // Campo das questões //
        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close()
    }
}

initDb.init();



