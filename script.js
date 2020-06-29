var tl = gsap.timeline()
tl.to(".hero__backdrop", {
	x: 0,
	opacity: 1,
	duration: 1
})

tl .to(".hero__product-img", 
	{
		opacity: 1, 
		y: 0, 
		duration: 1
}, 
">-1"
);

tl.to(".nav", {
	opacity: 1,
	duration: 1
	},
	">-0.5"
)