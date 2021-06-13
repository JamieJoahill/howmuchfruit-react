const Hero = () => {
  return ( 
    <div className="hero" id="home">
		<div className="hero__container">
			<h1 className="hero__heading"><span id="choose">Choose </span><span id="your">your </span><span id="fruit">fruit?</span></h1>
			<p className="hero__description">Unlimited Possibilites</p>
			<div className="fruit orange">🍊</div>
			<div className="fruit watermelon">🍉</div>
			<div className="fruit apple closed">🍎</div>
			<div className="fruit apple open active">🍏</div>
			<div className="fruit banana">🍌</div>
			<div className="fruit blueberry">🫐</div>
			<div className="fruit pineapple">🍍</div>
			<div className="fruit cherry">🍒</div>
			<div className="fruit coconut">🥥</div>
			<div id="btn__wrapper">
				<a href="#fruit-form" className="btn-select">Select</a>
			</div>
		</div>
	</div>
   );
}
 
export default Hero;