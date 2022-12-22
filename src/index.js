/**
 * main script file for index.html
 */
(async () => {
	const throwConfetti = async () => {
		await tsParticles.load("tsparticles", {
			preset: "confetti",
		})
	};
	const btnEl = document.querySelector('button');
	btnEl.addEventListener(
		'click',
		throwConfetti
	);
})();