!function(){function e(e,t){return new Promise((function(n,o){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault(),console.log(t.target.elements);for(var n=Number(t.target.elements.delay.value),o=Number(t.target.elements.step.value),i=Number(t.target.elements.amount.value),a=1;a<=i;a++)e(a,n).then((function(e){var t=e.position,n=e.delay;Notiflix.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;Notiflix.Notify.warning("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),n=Number(n+o)}))}();
//# sourceMappingURL=03-promises.33b1e1d1.js.map