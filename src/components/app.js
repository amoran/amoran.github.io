import React, { Component } from 'react';
import Terminal from 'react-bash';
import {structure} from '../util/constants.js';

export const open = {
  exec: ({structure, history, cwd}, command) => {
    return {
      structure,
      cwd,
      history: history.concat({value: `You called open on file ${command.args[0]}`})
    };
  }
};

export default class App extends Component {
	render() {
		let extensions = {open};
		return (
			<div className="pageWrapper">
				<div className="terminalWrapper">
					<Terminal 
						extensions={extensions}
						history={[{value: 'Welcome!'}]}
						prefix={'guest@amoran.github.io'}
						structure={structure}
					/>
				</div>
			</div>
    );
  }
}
