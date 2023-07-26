import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Сontacts/Contacts';
import Footer from './components/footer/Footer';
import ScrollStopper from './components/utils/ScrollStopper';
import './App.css'
import './components/utils/canvastree.jsx'
import ScrollToUp from './components/ScrollToUp/ScrollToUp';

function App() {

	return (
		<div>
			<Header/>
			<main className='main'>
				<ScrollStopper/>
				<Home />
				<About/>
				<Skills/>
				<Portfolio/>
				<Contacts/>
			</main>

			<Footer/>
			<ScrollToUp/>


		</div>
	)
}

export default App
