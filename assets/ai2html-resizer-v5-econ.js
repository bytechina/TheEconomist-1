	(function (scriptEnvironment, nameSpace) {
		// requires IE9+
		if (!("querySelector" in document)) return;
		var observer = window.IntersectionObserver ? new IntersectionObserver(onIntersectionChange, {}) : null;
		var visibilityIndex = {}; // visibility of each graphic, indexed by container id (used with InteractionObserver)

		updateAllGraphics();
		document.addEventListener("DOMContentLoaded", updateAllGraphics);
		window.addEventListener("resize", throttle(updateAllGraphics, 200));

		function updateAllGraphics() {
			selectElements(".ai2html-box-v5").forEach(updateGraphic);
			econOnResize();
		}

		function updateGraphic(container) {
			var artboards = selectElements("." + nameSpace + "artboard[data-min-width]", container),
					width = Math.round(container.getBoundingClientRect().width),
					id = container.id, // assume container has an id
					showImages = !observer || visibilityIndex[id] == 'visible';

			// console.log(artboards)

			// Set artboard visibility based on container width
			artboards.forEach(function(el) {
				var minwidth = el.getAttribute("data-min-width"),
						maxwidth = el.getAttribute("data-max-width");
				if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
					if (showImages) {
						selectElements(".g-artboard img", el).forEach(updateImgSrc);
					}
					el.style.display = "block";
				} else {
					el.style.display = "none";
				}
			});

			// Initialize lazy loading on first call, if IntersectionObserver is available
			if (observer && !visibilityIndex[id]) {
				if (containerIsVisible(container)) {
					// Skip IntersectionObserver if graphic is initially visible
					// Note: We're doing this after artboard visibility is first calculated
					//	 (above) -- otherwise all artboard images are display:block and the
					//	 calculated height of the graphic is huge.
					// TODO: Consider making artboard images position:absolute and setting
					//	 height as a padding % (calculated from the aspect ratio of the graphic).
					//	 This will correctly set the initial height of the graphic before
					//	 an image is loaded.
					visibilityIndex[id] = 'visible';
					updateGraphic(container); // Call again to start loading right away
				} else {
					visibilityIndex[id] = 'hidden';
					observer.observe(container);
				}
			}
		}

		function containerIsVisible(container) {
			var bounds = container.getBoundingClientRect();
			return bounds.top < window.innerHeight && bounds.bottom > 0;
		}

		// Replace blank placeholder image with actual image
		// (only relevant if use_lazy_loader option is true)
		function updateImgSrc(img) {
			var src = img.getAttribute("data-src");
			if (src && img.getAttribute("src") != src) {
				img.setAttribute("src", src);
			}
		}

		function onIntersectionChange(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					visibilityIndex[entry.target.id] = 'visible';
					observer.unobserve(entry.target);
					updateGraphic(entry.target);
				}
			});
		}

		function selectElements(selector, parent) {
			var selection = (parent || document).querySelectorAll(selector);
			return Array.prototype.slice.call(selection);
		}

		function econOnResize() {
			// console.log('resizing thingy');
			var height;
			if(typeof window.getComputedStyle !== 'undefined') {
				// console.log('resizing by computedStyle')
				var contentElement = document.querySelector('.ai2html');
				if(!contentElement) {
					setTimeout(econOnResize, 0);
					return;
				}
				height = parseInt(window
					.getComputedStyle(contentElement, null)
					.getPropertyValue('height')
					.split('.')[0])
			} else {
				// console.log('resizing by boundingClientRect');
				var contentElement = document.querySelector('.ai2html'),
					html = document.documentElement;
				if(!contentElement) {
					setTimeout(econOnResize, 0);
					return;
				}
				height = contentElement.getBoundingClientRect().height;
			}

			var targetOrigin = (window.location !== window.parent.location) ? document.referrer : document.location;

			// console.log('resizing heightChange', height);

			window.parent.postMessage({
				type: 'RESIZE',
				payload: {
					height: height + 20,
					origin: document.location.href
				}
			}, '*');
		}

		// based on underscore.js
		function throttle(func, wait) {
			var _now = Date.now || function() { return +new Date(); },
					timeout = null, previous = 0;
			var run = function() {
					previous = _now();
					timeout = null;
					func();
			};
			return function() {
				var remaining = wait - (_now() - previous);
				if (remaining <= 0 || remaining > wait) {
					if (timeout) {
						clearTimeout(timeout);
					}
					run();
				} else if (!timeout) {
					timeout = setTimeout(run, remaining);
				}
			};
		}

		econOnResize();

	})("economist", "g-");
