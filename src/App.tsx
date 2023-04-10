import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "item1", amount: 5, category: "Groceries" },
    { id: 2, description: "ITEM2", amount: 1, category: "Utilities" },
    { id: 3, description: "it3", amount: 5, category: "Utilities" },
    { id: 4, description: "it4", amount: 5, category: "Groceries" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseForm
        onSubmit={(newExpense) =>
          setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }])
        }
      ></ExpenseForm>
      <ExpenseFilter
        onSelectCategory={(category: string) => {
          setSelectedCategory(category);
        }}
      />
      <ExpenseList
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        expenses={visibleExpenses}
      />
    </div>
  );
}
export default App;
