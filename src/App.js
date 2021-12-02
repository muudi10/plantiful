import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Register from "./components/RegisterForm/Register"
import { DataContextProvider } from "./dataContext/DataContext";
import PlantCard from "./components/Card/PlantCard"
import NavBar from "./components/TopBar/TopBar"
function App() {
  return (
    <DataContextProvider>
      <div className="App container ">
      <NavBar />
        <RegisterForm />
        <LoginForm />
        < Register/>
        <PlantCard />
      </div>
    </DataContextProvider>
  );
}

export default App;
