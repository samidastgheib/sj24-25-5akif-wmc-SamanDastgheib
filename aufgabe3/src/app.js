import fetch from 'node-fetch';
import https from 'https';
const agent = new https.Agent({
    rejectUnauthorized: false // Ignoriert das selbstsignierte Zertifikat
});
// TODO: Write a type guard for TodoItem
//       Vervollständige die Funktionsdeklaration mit den Parametern und dem Rückgabewert.
function isTodoItem(item) {
    console.log(item);
    return typeof item.todoItemGuid === 'string' &&
        typeof item.todoItemTitle === 'string' &&
        typeof item.todoItemIsCompleted === 'boolean' &&
        typeof item.guid === 'string' &&
        typeof item.title === 'string' &&
        typeof item.isCompleted === 'boolean' &&
        (typeof item.dueDate === 'string' || typeof item.dueDate === 'object') &&
        typeof item.createdAt === 'string' &&
        typeof item.updatedAt === 'string';
}
async function fetchTodoTasks() {
    const response = await fetch('https://localhost:5443/api/TodoTasks', { agent });
    if (!response.ok) {
        throw new Error('Fehler beim Abrufen der Daten');
    }
    const data = await response.json();
    // TODO: Erstelle ein TodoItem mit den Properties todoItemTitle, title, createdAt und updatedAt.
    //       und speichere die Daten in todoItems.    
    const todoItems = data.map((item) => ({
        todoItemGuid: item.todoItemGuid,
        todoItemTitle: item.todoItemTitle,
        todoItemIsCompleted: item.todoItemIsCompleted,
        todoItemDueDate: item.todoItemDueDate,
        guid: item.guid,
        title: item.title,
        isCompleted: item.isCompleted,
        dueDate: item.dueDate,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
    }));
    // Überprüfen, ob die Antwort dem Category-Interface entspricht
    if (Array.isArray(todoItems) && todoItems.every(isTodoItem)) {
        return todoItems;
    }
    else {
        throw new Error('Invalid data from server.');
    }
}
// Start fetching the categories
const todoTasks = await fetchTodoTasks();
for (const todoTask of todoTasks.filter(t => t.todoItemTitle == "Itaque et earum modi similique veniam explicabo quo.")) {
    console.log(`TodoTask ${todoTask.title} is in TodoItem ${todoTask.todoItemTitle}`);
}
//# sourceMappingURL=app.js.map