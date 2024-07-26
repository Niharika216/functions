import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  let firstName = useRef();
  let lastName = useRef();
  let engMarks = useRef();
  let sanskritMarks = useRef();
  let matAMarks = useRef();
  let matBMarks = useRef();
  let physicsMarks = useRef();
  let chemistryMarks = useRef();
  let result = useRef();
  let resultRef = useRef();
  let summary=useRef();

  let engResult = useRef();
  let sanskritResult = useRef();
  let matAResult = useRef();
  let matBResult = useRef();
  let physicsResult = useRef();
  let chemistryResult = useRef();

  let langPassMarks = 35;
  let MatPassMarks = 27;
  let sciPassMarks = 17;

  let inputOnChange = (inputRef, result) => {
    if (inputRef.current.value >= 0 && inputRef.current.value <= 100) {
      if (inputRef.current.value >= langPassMarks) {
        result.current.innerHTML = "pass";
        result.current.style.color = "green";
      } else {
        result.current.innerHTML = "fail";
        result.current.style.color = "red";
      }
    } else {
      result.current.innerHTML = "invalid";
      result.current.style.color = "black";
    }
  };

  let inputOnChange1 = (inputRef, result) => {
    if (inputRef.current.value >= 0 && inputRef.current.value <= 75) {
      if (inputRef.current.value >= MatPassMarks) {
        result.current.innerHTML = "pass";
        result.current.style.color = "green";
      } else {
        result.current.innerHTML = "fail";
        result.current.style.color = "red";
      }
    } else {
      result.current.innerHTML = "invalid";
      result.current.style.color = "black";
    }
  };

  let inputOnChange2 = (inputRef, result) => {
    if (inputRef.current.value >= 0 && inputRef.current.value <= 60) {
      if (inputRef.current.value >= sciPassMarks) {
        result.current.innerHTML = "pass";
        result.current.style.color = "green";
      } else {
        result.current.innerHTML = "fail";
        result.current.style.color = "red";
      }
    } else {
      result.current.innerHTML = "invalid";
      result.current.style.color = "black";
    }
  };

  let calculateTotal = () => {
    let English = engMarks.current.value;
    let Sanskrit = sanskritMarks.current.value;
    let MatA = matAMarks.current.value;
    let MatB = matBMarks.current.value;
    let Physics = physicsMarks.current.value;
    let Chemistry = chemistryMarks.current.value;

    let totalMarks = English + Sanskrit + MatA + MatB + Physics + Chemistry;
    let perc = (totalMarks / 470)*100;
    if (
      English <= langPassMarks ||
      Sanskrit <= langPassMarks ||
      MatA <= MatPassMarks ||
      MatB <= MatPassMarks ||
      Physics <= sciPassMarks ||
      Chemistry <= sciPassMarks
    ) {
      resultRef.current.innerHTML = "fail";
    } else {
      resultRef.current.innerHTML = "pass";
    }
    let summary = {
      total: totalMarks,
      percentage: perc,
      result: resultRef,
    };
    return summary;
  };

  return (
    <div className="App">
      <h1>Functions with return type</h1>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" ref={firstName}></input>
          <span></span>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" ref={lastName}></input>
          <span></span>
        </div>
        <div>
          <label>English</label>
          <input
            type="number
            "
            ref={engMarks}
            onChange={() => {
              inputOnChange(engMarks, engResult);
            }}
          ></input>
          <span ref={engResult}></span>
        </div>
        <div>
          <label>Sanskrit</label>
          <input
            type="number"
            ref={sanskritMarks}
            onChange={() => {
              inputOnChange(sanskritMarks, sanskritResult);
            }}
          ></input>
          <span ref={sanskritResult}></span>
        </div>
        <div>
          <label>Mathematics-A</label>
          <input
            type="number"
            ref={matAMarks}
            onChange={() => {
              inputOnChange1(matAMarks, matAResult);
            }}
          ></input>
          <span ref={matAResult}></span>
        </div>
        <div>
          <label>Mathematics-B</label>
          <input
            type="number"
            ref={matBMarks}
            onChange={() => {
              inputOnChange1(matBMarks, matBResult);
            }}
          ></input>
          <span ref={matBResult}></span>
        </div>
        <div>
          <label>Physics</label>
          <input
            type="number"
            ref={physicsMarks}
            onChange={() => {
              inputOnChange2(physicsMarks, physicsResult);
            }}
          ></input>
          <span ref={physicsResult}></span>
        </div>
        <div>
          <label>Chemistry</label>
          <input
            type="number"
            ref={chemistryMarks}
            onChange={() => {
              inputOnChange2(chemistryMarks, chemistryResult);
            }}
          ></input>
          <span ref={chemistryResult}></span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let summary = calculateTotal();
              console.log(summary);
            }}
          >
            Calculate Result
          </button>
          <p ref={resultRef}></p>
        </div>
      </form>
    </div>
  );
}

export default App;
