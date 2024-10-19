import { useEffect, useState } from "react";
import axios from "axios";
import urlPage from "./export";

function App() {
  const url = urlPage();
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    async function fetchResult() {
      const result = await axios.get(url);
      setData(result.data);
    }

    fetchResult();
  }, []);

  async function submitForm(e) {
    e.preventDefault();
    const result = await axios.post(url + "/mail", {
      name: name,
    });
    setName(result.data.name);
    alert("Your name is " + result.data.name);
  }

  return (
    <div>
      <div className="underline text-red-800 p-16">Default page</div>
      <div>Fetched Data: {data}</div>
      <form className="m-10" onSubmit={submitForm}>
        <input
          className="border-2 border-red-700 block mb-5"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="border-1 border-blue-800">Submit</button>
      </form>
    </div>
  );
}

export default App;
