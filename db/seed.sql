DROP TABLE IF EXISTS "users";
CREATE TABLE "users" (
	"id" serial NOT NULL UNIQUE,
	"first_name" varchar(20) NOT NULL,
	"last_name" varchar(20) NOT NULL,
	"email" varchar(30) NOT NULL,
	"password" TEXT NOT NULL,
	"phone" integer NOT NULL,
	"institutions_id" integer REFERENCES institutions(id),
	CONSTRAINT users_pk PRIMARY KEY ("id")

) WITH (
  OIDS=FALSE
);


DROP TABLE IF EXISTS "students";
CREATE TABLE "students" (
	"first_name" varchar(20) NOT NULL,
	"last_name" varchar(20) NOT NULL,
	"id" integer NOT NULL UNIQUE,
	"institution_id" integer REFERENCES institutions(id),
	CONSTRAINT students_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


DROP TABLE IF EXISTS "ratings";
CREATE TABLE "ratings" (
	"id" serial NOT NULL,
	"users_id" integer REFERENCES users(id),
	"student_id" integer REFERENCES students(id),
	"attendance" integer NOT NULL,
	"dedication" integer NOT NULL,
	"independent" integer NOT NULL,
	"organization" integer NOT NULL,
	"initiative" integer NOT NULL,
	"respect" integer NOT NULL,
	"comments" VARCHAR(200) NOT NULL,
	"have_again" VARCHAR(7) NOT NULL,
	CONSTRAINT ratings_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


DROP TABLE IF EXISTS "institutions";
CREATE TABLE "institutions" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"city" TEXT NOT NULL,
	"state" TEXT NOT NULL,
	CONSTRAINT institutions_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



-- ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("institutions_id") REFERENCES "institutions"("id");

-- ALTER TABLE "students" ADD CONSTRAINT "students_fk0" FOREIGN KEY ("institutions_id") REFERENCES "institutions"("id");

-- ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk0" FOREIGN KEY ("users_id") REFERENCES "users"("id");
-- ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk1" FOREIGN KEY ("student_id") REFERENCES "students"("id");


