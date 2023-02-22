import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const db = getFirestore(app);

const imageCollection = "images";
const getImages = async () => {
  const imagesCollection = collection(db, imageCollection);
  const imagesSnapshot = await getDocs(imagesCollection);
  const imagesList = imagesSnapshot.docs.map((doc) => doc.data());
  console.log(imagesList);
  return imagesList;
};

export default getImages;
