import Navbar from './Components/containers/Navbar';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from 'Components/pages/Home';
import ClusterRush from 'Components/pages/Games/ClusterRush';
import MotoX3M from 'Components/pages/Games/MotoX3M';
import Slope from 'Components/pages/Games/Slope/Slope';
import { addSiteView, login } from 'modules/web';
import { Component } from 'react';
import Button from 'Components/shared/Button';
import { getCookie } from 'modules/cookies';
import Superhot from 'Components/pages/Games/Superhot';
import Stack from 'Components/pages/Games/Stack';
import RollingForests from 'Components/pages/Games/RollingForests';
import SubwaySurfers from 'Components/pages/Games/SubwaySurfers';
import DriftBoss from 'Components/pages/Games/DriftBoss';
import RetroBowl from 'Components/pages/Games/RetroBowl';
import ScrapMetal from 'Components/pages/Games/ScrapMetal';
import JustFall from 'Components/pages/Games/JustFall';
import Minecraft from 'Components/pages/Games/Minecraft';
import DriftHunters from 'Components/pages/Games/DriftHunters';
import Footer from 'Components/containers/Footer';
import JetpackJoyriders from 'Components/pages/Games/JetpackJoyriders';
import IvILOL from 'Components/pages/Games/1v1LOL';
import GreyBox from 'Components/pages/Games/GreyBox';
import AmongUs from 'Components/pages/Games/AmongUs';
import WorldsHardestGame from 'Components/pages/Games/WorldsHardestGame';
import PaperIO from 'Components/pages/Games/PaperIO';
import HelixJump from 'Components/pages/Games/HelixJump';
import Mario from 'Components/pages/Games/Mario';
import CrossyRoad from 'Components/pages/Games/CrossyRoad';
import SnakeIO from 'Components/pages/Games/SnakeIO';
import AngryBirds from 'Components/pages/Games/AngryBirds';
import HappyWheels from 'Components/pages/Games/HappyWheels';
import UltimateWheelie from 'Components/pages/Games/UltimateWheelie';
import PrivacyPolicy from 'Components/pages/PrivacyPolicy';
import TermsAndConditions from 'Components/pages/TermsAndConditions/TermsAndConditions';
import LearnToFly from 'Components/pages/Games/LearnToFly';
import ClashRoyale from 'Components/pages/Games/ClashRoyale';
import Analytics from 'Components/pages/Analytics';
import SignUp from 'Components/pages/SignUp';
import Login from 'Components/pages/Login';
import Account from 'Components/pages/Account';
import './App.scss';

class App extends Component {
	constructor() {
		super();

		this.state = {
			tabChanged: false,
			cloak: false,
		};
	}

	async componentDidMount() {
		document.addEventListener('visibilitychange', (event) => {
			if (document.visibilityState === 'visible') {
				if (!this.state.tabChanged) {
					this.setState({
						tabChanged: false,
						cloak: true,
					});
				}

				return;
			}

			if (this.state.tabChanged) {
				this.setState({
					tabChanged: true,
				});
			}
		});

		const email = getCookie('email');
		const password = getCookie('password');

		if (email && password) {
			const loggedIn = await login({
				email,
				password,
			});

			if (loggedIn) {
				this.setState({
					loggedIn: true,
					loaded: true,
				});

				return;
			}
		}

		this.setState({
			loaded: true,
		});
	}

	render() {
		addSiteView();

		return (
			<>
				{this.state.cloak && getCookie('tabCloaker') === 'true' && (
					<>
						<iframe
							title='Google Drive'
							className='cloak-screen'
							src='https://google.com/drive/'
						/>
						<Button
							className='uncloak-button'
							onClick={() => {
								this.setState({
									cloak: false,
								});
							}}
							label='Back'
						/>
					</>
				)}
				<HashRouter>
					<Navbar
						loggedIn={this.state.loggedIn}
						loaded={this.state.loaded}
					/>
					<div className='content'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/analytics' element={<Analytics />} />
							<Route path='/signUp' element={<SignUp />} />
							<Route path='/login' element={<Login />} />
							<Route path='/account' element={<Account />} />
							<Route
								path='/clusterRush'
								element={<ClusterRush />}
							/>
							<Route path='/motoX3M' element={<MotoX3M />} />
							<Route path='/slope' element={<Slope />} />
							<Route path='/superhot' element={<Superhot />} />
							<Route path='/stack' element={<Stack />} />
							<Route
								path='/learnToFly'
								element={<LearnToFly />}
							/>
							<Route path='/retroBowl' element={<RetroBowl />} />
							<Route
								path='/clashRoyale'
								element={<ClashRoyale />}
							/>
							<Route path='/driftBoss' element={<DriftBoss />} />
							<Route
								path='/rollingForests'
								element={<RollingForests />}
							/>
							<Route
								path='/subwaySurfers'
								element={<SubwaySurfers />}
							/>
							<Route
								path='/scrapMetal'
								element={<ScrapMetal />}
							/>
							<Route path='/justFall' element={<JustFall />} />
							<Route path='/minecraft' element={<Minecraft />} />
							<Route
								path='/driftHunters'
								element={<DriftHunters />}
							/>
							<Route
								path='/jetpackJoyriders'
								element={<JetpackJoyriders />}
							/>
							<Route path='/1v1LOL' element={<IvILOL />} />
							<Route path='/greyBox' element={<GreyBox />} />
							<Route path='/amongUs' element={<AmongUs />} />
							<Route
								path='/worldsHardestGame'
								element={<WorldsHardestGame />}
							/>
							<Route path='/paperIO' element={<PaperIO />} />
							<Route path='/mario' element={<Mario />} />
							<Route
								path='/crossyRoad'
								element={<CrossyRoad />}
							/>
							<Route
								path='/privacyPolicy'
								element={<PrivacyPolicy />}
							/>
							<Route
								path='/termsOfService'
								element={<TermsAndConditions />}
							/>
							<Route
								path='/ultimateWheelie'
								element={<UltimateWheelie />}
							/>
							<Route path='/helixJump' element={<HelixJump />} />
							<Route path='/snakeIO' element={<SnakeIO />} />
							<Route
								path='/happyWheels'
								element={<HappyWheels />}
							/>
							<Route
								path='/angryBirds'
								element={<AngryBirds />}
							/>
						</Routes>
					</div>
					<Footer loggedIn={this.state.loggedIn} />
				</HashRouter>
			</>
		);
	}
}

export default App;
