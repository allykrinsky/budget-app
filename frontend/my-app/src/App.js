// src/App.js
import React from 'react';
import {Text} from 'react-native'
import TabGroup from './components/Tabs/TabGroup';
import Header from './components/utils/Heading';

const tabs = [
  {
    title: 'January',
    content: <div>This is the content i changed</div>,
  },
  {
    title: 'February',
    content: <div>This is the content for Tab 2</div>,
  },
  {
    title: 'March',
    content: <div>This is the content for Tab 3</div>,
  },
];

function App() {
  return (
    <div className="App">
     <Header text="Monthly Expenses"/>
      <TabGroup tabs={tabs} />
    </div>
  );
}

export default App;
