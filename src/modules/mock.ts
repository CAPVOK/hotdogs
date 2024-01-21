import { ITunesResult } from "./getMusicByName";
import image from "../../public/smurfcat.jpeg"

export const SONGS_MOCK: ITunesResult = {
  resultCount: 3, 
  results: [
    {
      wrapperType: "track",
      artistName: "VladimirRt5",
      collectionCensoredName: "Hog mode",
      trackViewUrl: "",
      artworkUrl100: image,
    },
    {
      wrapperType: "track",
      artistName: "Batman Frukt",
      collectionCensoredName: "Rydovoi Fruktin",
      trackViewUrl: "",
      artworkUrl100: image,
    },
    {
      wrapperType: "track",
      artistName: "MarkBobr",
      collectionCensoredName: "Sweet Wood",
      trackViewUrl: "",
      artworkUrl100: image,
    },
  ],
};
