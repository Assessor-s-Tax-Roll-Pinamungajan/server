-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Anislag" (
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
    "improvement_3" TEXT,
    "mch" TEXT,
    "oth" TEXT,
    "cancel" TEXT,
    "index_no" TEXT NOT NULL,
    "barangay" TEXT NOT NULL
);
