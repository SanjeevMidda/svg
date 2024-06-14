import "./index.css";

function App() {
  return (
    <div className="App">
      <header>
        <h3>seoul</h3>
        <h3>busan</h3>
        <h3>sockcho</h3>
      </header>
      <svg viewBox="0 0 168 141" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M97.0092 47.8295C93.0105 47.8295 59.4983 44.5742 65.2222 56.022C67.7494 61.0763 78.7202 62.7454 83.0819 63.723C92.5321 65.8411 101.352 67 111.018 67C114.274 67 119.501 67.952 122.57 66.8361C125.71 65.6942 122.782 57.1584 121.587 55.6943C116.212 49.1126 110.358 38.8147 102.908 34.5576C94.6187 29.821 83.5084 25.8018 74.234 23.6615C61.9553 20.828 48.0208 21.3397 38.1049 29.3963C29.2792 36.5673 33.5613 58.2047 36.5484 67C46.7581 97.062 81.7452 99.4264 108.725 101.572C123.161 102.721 140.726 104.787 155.012 101.491C163.798 99.4632 166.136 90.8952 166.318 82.7296C166.771 62.32 161.797 38.3922 144.69 25.0543C125.321 9.95354 102.518 5.38447 78.7399 3.58986C63.6626 2.45195 48.7531 1.6695 33.5991 2.1152C16.2101 2.62664 7.50036 19.1306 4.26982 34.4757C-0.342762 56.3854 2.06181 80.8953 12.1346 100.753C21.5354 119.286 31.7474 130.603 52.6876 135.49C57.2252 136.548 64.4876 139.258 68.9908 139.258"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          id="MyPath"
          fill="none"
        />

        <text>
          <textPath href="#MyPath">
            hello, welcome to South Korea! hello, welcome to South Korea! hello,
            welcome to South Korea! hello, welcome to South Korea! hello,
            welcome to South Korea!
          </textPath>
        </text>
      </svg>

      {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          id="MyPath"
          fill="none"
          stroke="red"
          d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50"
        />

        <text>
          <textPath href="#MyPath">
            Quick brown fox jumps over the lazy dog.
          </textPath>
        </text>
      </svg> */}

      <h1>안녕하세요</h1>
    </div>
  );
}

export default App;
