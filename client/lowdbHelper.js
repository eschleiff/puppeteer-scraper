const lowdb= require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('books.json');

class LowDbHelper {
    constructor() {
        this.db = lowdb(adapter);
    }

    getData() {
        try {
            let data = this.db.getState().books
            return data
        } catch (error) {
            console.log('error', error)
        }
    }

    saveData() {
        try {
            this.db.set('books', arg).write()
            console.log('data save successfully!')
        } catch (error) {
            console.log('error', error)
        }
    }
}

module.exports = {
    LowDbHelper
}