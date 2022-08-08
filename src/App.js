import logo from './logo.svg';
import './App.css';
import ImportComponent from './R003_ImportComponent';
import LifeCycleEx_Render from './R004_LifeCycleEx';
import LifeCycleEx_Constructor from './R005_LifeCycleEx';
import LifeCycleEx_GetdDerivedStateFromProps from './R006_LifeCycleEx'
import LifeCycleEx_ComponentDidMount from './R007_LifeCycleEx'
import LifeCycleEx_ShouldUpdateComponent from './R008_LifeCycleEx'
import Es6 from './R009_Es6'
import Variable from './R010_Variable'
import SpreadOperator from './R011_SpreadOperator'
import ClassPrototype from './R012_ClassPrototype'
import ArrowFunc from './R013_ArrowFunction'
import ForEach from './R014_ForEach'
import Map from './R015_Map'
import JQuery from './R016_JQuery'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <ImportComponent></ImportComponent>
      <LifeCycleEx_Render></LifeCycleEx_Render>
      <LifeCycleEx_Constructor></LifeCycleEx_Constructor>
      <LifeCycleEx_GetdDerivedStateFromProps prop_value = 'FromApp.js'></LifeCycleEx_GetdDerivedStateFromProps>
      <LifeCycleEx_ComponentDidMount prop_value = 'FromApp.js'></LifeCycleEx_ComponentDidMount>
      <LifeCycleEx_ShouldUpdateComponent prop_value = 'FromApp.js'></LifeCycleEx_ShouldUpdateComponent>
      <Es6></Es6>
      <Variable></Variable>
      <SpreadOperator></SpreadOperator>
      <ClassPrototype></ClassPrototype>
      <ArrowFunc></ArrowFunc>
      <ForEach></ForEach>
      <Map></Map>
      <JQuery></JQuery>
    </div>
  );
}

export default App;
