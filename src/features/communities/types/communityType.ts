import { comunity } from "@/src/db/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type InsertCommunity = InferInsertModel< typeof comunity >
export type SelectCommunity = InferSelectModel< typeof comunity >
