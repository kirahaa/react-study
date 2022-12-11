import onew from "../onew.png";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={onew} className="App-logo" alt="onew" />
        <p>
          Hello ! My name is ONEW, I'm happy to meet you!
        </p>
        <a
          className="App-link"
          href="/room"
          rel="home"
        >
          Invite my Home
        </a>
      </header>
    </div>
  )
}

export default Home