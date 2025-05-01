import { Router } from "./app.router";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
