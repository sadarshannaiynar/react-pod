import React from 'react';
import StatelessComponent from './StatelessComponent';
import StatefulComponent from './StatefulComponent';

const App = () => (
    <div>
        <StatelessComponent title="Title" content="Content" />
        <StatefulComponent />
    </div>
);

export default App;
