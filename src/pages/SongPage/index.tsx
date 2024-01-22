import { FC } from "react";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../../Routes";

export const AlbumPage: FC = () => {
  // запрос

  return (
    <div>
      <BreadCrumbs
        crumbs={[
          { label: ROUTE_LABELS.ALBUMS, path: ROUTES.ALBUMS },
          { label: "Made in Heaven" },
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Made in Heaven</h1>
            <p>
              Made in Heaven — двадцать первый студийный альбом австралийской
              хард-рок-группы AC/DC, выпущенный 28 ноября 1995 года. Это
              последний альбом, записанный с участием вокалиста Бона Скотта,
              который умер 19 февраля 1980 года. Альбом был спродюсирован
              Брайаном Джонсоном и Риком Рубином и стал самым продаваемым
              альбомом AC/DC.
            </p>
            <p>
              Альбом начинается с песни «Ain't No Fun (Waiting Around to Be a
              Millionaire)», которая была выпущена в качестве сингла в 1995 году
              и достигла 16-го места в чарте Billboard Hot 100. Другие синглы с
              альбома включают «You Shook Me All Night Long», «Love Song» и
              «Safe in New York City».
            </p>
            <p>
              Made in Heaven был высоко оценен критиками и поклонниками. Он
              получил четыре звезды от Rolling Stone и был номинирован на премию
              Грэмми за лучший рок-альбом.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
