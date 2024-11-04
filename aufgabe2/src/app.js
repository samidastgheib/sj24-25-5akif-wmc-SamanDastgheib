import * as fs from 'fs';
// Lädt die Daten der Fahrschule. Hier ist nichts zu implementieren.
function loadDrivingSchoolData(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data).driving_school;
    }
    catch (error) {
        console.error("Error reading or parsing the JSON file:", error);
        return null;
    }
}
// TODO: Implementiere eine Funktion listCustomers mit 2 Parametern: courseCode und blockId.
//       Die Funktion soll ein Array von Customers zurückgeben.
//       Ersetze ??? durch deine Parameter und den return type.
//       Du kannst auf die Variable drivingSchoolData in der Funktion natürlich zugreifen.
function listCustomers(courseCode, blockId) {
    if (drivingSchoolData) {
        const foundCourse = drivingSchoolData.courses.find(course => course.course_code === courseCode);
        if (foundCourse) {
            const foundBlock = foundCourse.blocks.find(block => block.block_id === blockId);
            if (foundBlock) {
                return foundBlock.customers || [];
            }
        }
    }
    return drivingSchoolData?.courses
        .find(course => course.course_code === courseCode)
        ?.blocks.find(block => block.block_id === blockId)
        ?.customers || [];
}
// Load data from driving_school.json
const drivingSchoolData = loadDrivingSchoolData('driving_school.json');
if (drivingSchoolData) {
    console.log(`${drivingSchoolData.courses.length} courses loaded.`);
}
console.log("List of customers in BC101, Block 1:", listCustomers("BC101", 1));
//# sourceMappingURL=app.js.map