import React from 'react';
import CodeEditor from "./CodeEditor/CodeEditor";

const defaultValue = 'namespace VS\n' +
  '{\n' +
  '\tclass Program\n' +
  '\t{\n' +
  '\t\tstatic void Main(string[] args)\n' +
  '\t\t{\n' +
  '\t\t\tbool isPrime = true;\n' +
  '\t\t\tConsole.WriteLine("Prime Numbers : ");\n' +
  '\t\t\tfor (int i = 2; i <= 100; i++)\n' +
  '\t\t\t{\n' +
  '\t\t\t\tfor (int j = 2; j <= 100; j++)\n' +
  '\t\t\t\t{\n' +
  '\t\t\t\t\tif (i != j && i % j == 0)\n' +
  '\t\t\t\t\t{\n' +
  '\t\t\t\t\t\tisPrime = false;\n' +
  '\t\t\t\t\t\tbreak;\n' +
  '\t\t\t\t\t}\n' +
  '\t\t\t\t}\n' +
  '\t\t\t\t\n' +
  '\t\t\t\tif (isPrime)\n' +
  '\t\t\t\t{\n' +
  '\t\t\t\t\tConsole.Write("\\t" +i);\n' +
  '\t\t\t\t}\n' +
  '\t\t\t\tisPrime = true;\n' +
  '\t\t\t}\n' +
  '\t\t\tConsole.ReadKey();\n' +
  '\t\t}\n' +
  '\t}\n' +
  '}';


function App() {

  const setValue = (value) => {
    console.log(value);
  }
  return (
    <div className="App">
      <CodeEditor
        value={defaultValue}
        setValue={setValue}
      />
    </div>
  );
}

export default App;
