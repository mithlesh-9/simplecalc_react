import React from 'react';
import './App.css';
import Button from './Button';
class App extends React.Component {
	state = {
		num: 0,
		reset: false,
	};

	getOpertor = (num) => {
		const splitedData = num.toString().trim().split(' ');
		const operator = splitedData[splitedData.length - 1];
		return operator;
	};

	resetNum = (value) => this.setState({ reset: value });

	onBtnPress = (value) => {
		const { num } = this.state;
		const operatorsList = ['+', '-', '*', '/'];

		let newValue = num;

		if (value !== '=') {
			this.resetNum(false);
		}

		if (num === 0) {
			if (Number.isInteger(value)) {
				newValue = value;
			} else if (value === 'CE') {
				newValue = 0;
			}
		} else if (Number.isInteger(value)) {
			newValue = num.toString() + value;
		} else if (operatorsList.includes(value)) {
			const operator = this.getOpertor(num);
			if (operatorsList.includes(operator)) {
				newValue = num.replace(operator, value);
			} else {
				newValue = num.toString() + ' ' + value + ' ';
			}
		} else if (value === 'CE') {
			const operator = this.getOpertor(num);

			if (operatorsList.includes(operator)) {
				newValue = num.toString().substring(0, num.length - 3);
				if (newValue.length === 0) {
					newValue = 0;
				}
			} else {
				newValue = num.toString().substring(0, num.length - 1);
				if (newValue.length === 0) {
					newValue = 0;
				}
			}
		} else if (value === '=') {
			try {
				newValue = eval(num);
				this.resetNum(true);
			} catch (e) {
				newValue = num;
			}
		} else if (value === 'AC') {
			newValue = 0;
		}

		switch (value) {
			case 'AC':
			case 'CE':
			case '=':
			case '+':
			case '-':
			case '*':
			case '/':
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				this.setState({ num: newValue });
				break;

			default:
				return;
		}
	};

	render() {
		const { reset, num } = this.state;
		return (
			<div className='_container'>
				<div>
					<div className='_num_field'>{num}</div>
					<div>
						<div className='_flex'>
							<Button text='+' onClick={this.onBtnPress} />
							<Button text='-' onClick={this.onBtnPress} />
							<Button text='*' onClick={this.onBtnPress} />
							<Button text='/' onClick={this.onBtnPress} />
						</div>
						<div className='_grid'>
							<Button light={true} text={7} onClick={this.onBtnPress} />
							<Button light={true} text={8} onClick={this.onBtnPress} />
							<Button light={true} text={9} onClick={this.onBtnPress} />

							<Button light={true} text={4} onClick={this.onBtnPress} />
							<Button light={true} text={5} onClick={this.onBtnPress} />
							<Button light={true} text={6} onClick={this.onBtnPress} />

							<Button light={true} text={1} onClick={this.onBtnPress} />
							<Button light={true} text={2} onClick={this.onBtnPress} />
							<Button light={true} text={3} onClick={this.onBtnPress} />

							<Button
								light={true}
								text={reset ? 'AC' : 'CE'}
								onClick={this.onBtnPress}
							/>
							<Button light={true} text={0} onClick={this.onBtnPress} />
							<Button blue={true} text='=' onClick={this.onBtnPress} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
