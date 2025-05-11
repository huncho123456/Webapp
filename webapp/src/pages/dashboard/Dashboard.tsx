
import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";


const Dashboard = () => {
  const {expenses, error, isLoading} = useExpenses();
  if (isLoading) {
    return <div>Loading.........</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div className="container">
      {error && <p>{error}</p>}
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;