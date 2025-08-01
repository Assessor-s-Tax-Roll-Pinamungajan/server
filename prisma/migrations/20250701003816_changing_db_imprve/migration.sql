/*
  Warnings:

  - You are about to drop the column `improvement_3` on the `Anislag` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Anislag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "assessor_no" INTEGER NOT NULL,
    "cadastral_no" TEXT NOT NULL,
    "arp_A" TEXT,
    "arp_B" TEXT,
    "arp_C" TEXT,
    "arp_D" TEXT,
    "arp_E" TEXT,
    "name_owner" TEXT NOT NULL,
    "title_no" INTEGER,
    "area" TEXT,
    "classification_no" TEXT,
    "improvement_1" INTEGER,
    "improvement_2" TEXT,
    "mch" TEXT,
    "oth" TEXT,
    "cancel" TEXT,
    "index_no" TEXT NOT NULL,
    "barangay" TEXT NOT NULL
);
INSERT INTO "new_Anislag" ("area", "arp_A", "arp_B", "arp_C", "arp_D", "arp_E", "assessor_no", "barangay", "cadastral_no", "cancel", "classification_no", "id", "improvement_1", "improvement_2", "index_no", "mch", "name_owner", "oth", "title_no") SELECT "area", "arp_A", "arp_B", "arp_C", "arp_D", "arp_E", "assessor_no", "barangay", "cadastral_no", "cancel", "classification_no", "id", "improvement_1", "improvement_2", "index_no", "mch", "name_owner", "oth", "title_no" FROM "Anislag";
DROP TABLE "Anislag";
ALTER TABLE "new_Anislag" RENAME TO "Anislag";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
