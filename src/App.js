import './App.css';
import TextControl from './Component/TextControl/TextControl';

function App() {
  return (
    <div>
        <TextControl name="Hello Word" type="h1"></TextControl>
        <TextControl name="Hello Word" type="h2"></TextControl>
        <TextControl name="Hello Word" type="h3"></TextControl>
        <TextControl name="Hello Word" type="h4"></TextControl>
        <TextControl name="Hello Word" type="h5"></TextControl>
        <TextControl name="Hello Word" type="span"></TextControl><br/><br/>
        <TextControl name="Hello Word" type="span-italic"></TextControl><br/><br/>
        <TextControl name="Hello Word" type="span-bold"></TextControl><br/><br/>
        <TextControl name="Hello Word" type="span-color" color="red"></TextControl><br/><br/>
        <TextControl name="Hello Word" type="span-color" color="blue"></TextControl><br/><br/>
    </div>
  );
}

export default App;
