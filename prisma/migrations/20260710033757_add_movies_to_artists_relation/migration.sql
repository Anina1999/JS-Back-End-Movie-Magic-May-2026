-- CreateTable
CREATE TABLE "_ArtistToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ArtistToMovie_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ArtistToMovie_B_index" ON "_ArtistToMovie"("B");

-- AddForeignKey
ALTER TABLE "_ArtistToMovie" ADD CONSTRAINT "_ArtistToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "artists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToMovie" ADD CONSTRAINT "_ArtistToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
