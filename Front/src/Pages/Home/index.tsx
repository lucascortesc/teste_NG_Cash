import { Header } from "../../Components/Header";
import { UserModal } from "../../Components/UserModal";
import { Background } from "./styles";

export const Home = () => {
  return (
    <Background>
      <Header />
      <div className="home__body">
        <UserModal />
      </div>
    </Background>
  );
};
