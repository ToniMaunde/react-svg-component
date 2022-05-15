import { Icon } from "./components/Icon";
import { randomIcon } from "./assets/random";
import { reactIcon } from "./assets/react";
import { unpinIcon } from "./assets/unpin";

function App() {
  return (
    <main>
      <h3 className="title">Here is an example</h3>
      <section className="icons">
        <Icon {...unpinIcon}/>
        <Icon {...randomIcon}/>
        <Icon {...reactIcon}/>
      </section>
    </main>
  )
}

export default App;
