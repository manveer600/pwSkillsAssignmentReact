import Person from './components/Person.js'
import Button from './components/Button.js'
import Header from './components/Header.js'
import List from './components/List.js'

function App() {
  const name = 'Manveer';
  const age = 19;
  const text = 'Click Me!';
  const title = 'This is a header';
  const items = ["apple","banana","pear"]


  function buttonclicked(){
    console.log('Button clicked');
  }
  return (
    <div>
      <Person name={name} age={age}></Person>
      <Button text={text} onClick={buttonclicked}/>
      <Header header={title}/>
      <List items={items}/>
    </div>
  );
}

export default App;
