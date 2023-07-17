import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const collectionName = "expense";

const expensesCollectionRef = collection(db, collectionName);

class ExpenseDataService {
  addExpense = (newExpense) => {
    return addDoc(expensesCollectionRef, newExpense);
  };

  updateExpense = (updatedExpense) => {
    const expenseDoc = doc(db, collectionName, updatedExpense.id);
    return updateDoc(expenseDoc, updatedExpense);
  };

  deleteExpense = (id) => {
    const expenseDoc = doc(db, collectionName, id);
    return deleteDoc(expenseDoc);
  };

  getAllExpense = () => {
    return getDocs(expensesCollectionRef);
  };

  getExpense = (id) => {
    const expenseDoc = doc(db, collectionName, id);
    return getDoc(expenseDoc);
  };
}

const ExpenseDataServiceExport = new ExpenseDataService()
export default ExpenseDataServiceExport;