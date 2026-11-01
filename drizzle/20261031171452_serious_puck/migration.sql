ALTER TABLE "comunity" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "comunity" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "comunity" ADD COLUMN "created_by" text NOT NULL;