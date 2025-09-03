import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Products";

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid}) => {
  return isValid ? <ValidPassword/> : <InvalidPassword/>
}

export default function App() {
    return (
        <div>
            <Header />
            <Main />
            <Password isValid={true}/>
            <Footer />
        </div>
    );
}
