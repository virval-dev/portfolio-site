import LoginForm from "./components/heropage/LoginForm";
import Hero from "./components/heropage/Hero";

const Home: React.FC = () => {
  return (
    <main className="w-full h-screen flex flex-col">
      <Hero />
      <div className="flex-1 flex flex-col justify-center text-center items-center h-1/2 border-2">
        <LoginForm />
      </div>
    </main>
  );
};

export default Home;
