import { useEffect, useState } from "react";
import { Expense } from "../model/Expense";
import { getExpense } from "../services/expense-service";

const useExpenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [error, setErrors] = useState<string | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        setLoading(true);
        getExpense()
          .then((response) => {
            setExpenses(response.data);
          })
          .catch((error) => {
            setErrors(error.message);
          })
          .finally(() => {
            setLoading(false); 
          });
      }, []); 

      return {expenses, error, isLoading};

}

export default useExpenses