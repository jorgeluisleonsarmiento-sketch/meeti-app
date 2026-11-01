import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const comunity = pgTable('comunity', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 255 }).notNull(),
    description: text('description').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    createdBy: text('created_by').notNull()

})

//type InsertCommunity = InferInsertModel< typeof comunity >
//type SelectCommunity = typeof comunity.$inferSelect
// type InsertCommunity2  =  typeof comunity.$inferInsert