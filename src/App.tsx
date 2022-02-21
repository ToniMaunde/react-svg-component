import Icon from "./components/Icon"
import { react18, react24, react36, react48 } from "./assets/icons"

function App() {
  return (
    <>
      <h3 className="title">Here is an example</h3>
      <section className="icons-row">
        <Icon {...react18} />
        <Icon {...react24} />
        <Icon {...react36} />
        <Icon {...react48} />
      </section>
    </>
  )
}

export default App
