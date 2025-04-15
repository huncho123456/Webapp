import apiClient from "../config/api-client"
import { Expense } from "../model/Expense"

export const getExpense = () => {
    return apiClient.get<Expense[]>('/expenses')
} 