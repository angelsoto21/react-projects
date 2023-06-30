import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  const format = (username) => `@${username}`;

  return (
    <div className="App">
      <TwitterFollowCard formatusername={format} username="midudev" name="">
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard formatusername={format} username="pheralb" name="">
        Pablo Hernandez
      </TwitterFollowCard>

      <TwitterFollowCard
        formatusername={format}
        username="InterMiamiCF"
        name="vandes dender"
      >
        Inter de Miami
      </TwitterFollowCard>
    </div>
  );
}

export default App;
