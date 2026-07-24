-- CreateTable
CREATE TABLE "movies_artist" (
    "movieId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,
    "character" TEXT NOT NULL,

    CONSTRAINT "movies_artist_pkey" PRIMARY KEY ("movieId","artistId")
);

-- AddForeignKey
ALTER TABLE "movies_artist" ADD CONSTRAINT "movies_artist_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movies_artist" ADD CONSTRAINT "movies_artist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
