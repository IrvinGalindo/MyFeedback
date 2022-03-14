import {
  collection,
  getDocs,
  limit,
  updateDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../firebase";

const collectionRef = collection(db, "questions");

export const getQuestions = async () => {
  const queryQuestion = query(collectionRef, orderBy("createdAt"));
  const docsCollection = await getDocs(queryQuestion);
  return docsCollection.docs.map((doc) => ({
    ...doc.data(),
    createdAt: doc.data().createdAt.seconds,
  }));
};

export const updateQuestion = async (question) => {
  const queryQuestion = query(
    collectionRef,
    where("question", "==", question.question),
    limit(1)
  );

  const docToUpdate = await getDocs(queryQuestion);
  return updateDoc(docToUpdate.docs[0].ref, {
    answers: [...question.answers],
  });
};
