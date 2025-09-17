// create an entity with the following fields:
// id: number (primary key, auto-generated)
// title: string (not null)
// description: string (nullable)
// dueDate: Date (nullable)
// category: TaskCategory enum (default: 'DRAFT')
// labels: many-to-many relationship with 'Label' entity (a task can have multiple labels, and a label can be associated with multiple tasks)