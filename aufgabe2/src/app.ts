import * as fs from 'fs';

// TODO: Definiere ein Interface für die Daten in driving_school.json.
//       Da wir die Kunden noch extra brauchen, ist es besser, wenn du für Customer ein eigenes Interface definierst.
//       Ansonsten kannst du wählen, ob du ein verschachteltes Interface oder ein Interface, das andere Interfaces verwendet, erstellst.
interface Customer {
    // TODO: Implement your interface
}


interface DrivingSchool {
    // TODO: Implement your interface

}


// Lädt die Daten der Fahrschule. Hier ist nichts zu implementieren.
function loadDrivingSchoolData(filePath: string): DrivingSchool | null {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data).driving_school as DrivingSchool;
    } catch (error) {
        console.error("Error reading or parsing the JSON file:", error);
        return null;
    }
}

// TODO: Implementiere eine Funktion listCustomers mit 2 Parametern: courseCode und blockId.
//       Die Funktion soll ein Array von Customers zurückgeben.
//       Ersetze ??? durch deine Parameter und den return type.
//       Du kannst auf die Variable drivingSchoolData in der Funktion natürlich zugreifen.
function listCustomers(???): ??? {

}

// Load data from driving_school.json
const drivingSchoolData = loadDrivingSchoolData('driving_school.json');

if (drivingSchoolData) {
    console.log(`${drivingSchoolData.courses.length} courses loaded.`);
}

console.log("List of customers in BC101, Block 1:", listCustomers("BC101", 1));
