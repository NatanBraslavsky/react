import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Products";

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid}) => {
  return isValid ? <ValidPassword/> : <InvalidPassword/>
}

const Weather = ({temperature}) => {
    if(temperature < 15) {
        return <h1>It's cold outside!</h1>
    } else if(temperature < 25) {
        return <h1>It's nice outside!</h1>
    }
    return <h1>It's hot outside!</h1>
}

const UserStatus = ({loggedIn, isAdmin}) => {
    {loggedIn && isAdmin && <h1>Welcome Admin</h1>}
    {loggedIn && !isAdmin && <h1>Welcome Usur</h1>}
}

export default function App() {
    return (
        <div>
            <Header />
            <Main />
            <Password isValid={true}/>
            <Weather temperature={10} />
            <Weather temperature={20} />
            <Weather temperature={30} />
            <Footer />
        </div>
    );
}
