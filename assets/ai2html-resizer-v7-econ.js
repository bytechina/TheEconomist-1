	(function (containerId, opts) {
		if (!('querySelector' in document)) return;
		var container = document.querySelector(containerId);
		var nameSpace = opts.namespace || '';
		var onResize = throttle(update, 200);
		var waiting = !!window.IntersectionObserver;
		var observer;
		update();

		document.addEventListener('DOMContentLoaded', update);
		window.addEventListener('resize', onResize);

		function update() {
			var artboards = selectChildren('.' + nameSpace + 'artboard[data-min-width]', container),
					width = Math.round(container.getBoundingClientRect().width);

			// Set artboard visibility based on container width
			artboards.forEach(function(el) {
				var minwidth = el.getAttribute('data-min-width'),
						maxwidth = el.getAttribute('data-max-width');
				if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
					if (!waiting) {
						selectChildren('.' + nameSpace + 'aiImg', el).forEach(updateImgSrc);
					}
					el.style.display = 'block';
				} else {
					el.style.display = 'none';
				}
			});

			// Initialize lazy loading on first call
			if (waiting && !observer) {
				if (elementInView(container)) {
					waiting = false;
					update();
				} else {
					observer = new IntersectionObserver(onIntersectionChange, {});
					observer.observe(container);
				}
      }

      // Safeguard postmessage
      if (!container) {
          update();
          return;
      }

      // Send postmessage to e.com
      let height = container.getBoundingClientRect().height;
      window.parent.postMessage({
          type: 'RESIZE',
          payload: {
              height: height + 1,
              origin: document.location.href
          }
      }, '*');
		}

		function elementInView(el) {
			var bounds = el.getBoundingClientRect();
			return bounds.top < window.innerHeight && bounds.bottom > 0;
		}

		// Replace blank placeholder image with actual image
		function updateImgSrc(img) {
			var src = img.getAttribute('data-src');
			if (src && img.getAttribute('src') != src) {
				img.setAttribute('src', src);
			}
		}

		function onIntersectionChange(entries) {
			// There may be multiple entries relating to the same container
			// (captured at different times)
			var isIntersecting = entries.reduce(function(memo, entry) {
				return memo || entry.isIntersecting;
			}, false);
			if (isIntersecting) {
				waiting = false;
				observer.disconnect();
				observer = null;
				update();
			}
		}

		function selectChildren(selector, parent) {
			return parent ? Array.prototype.slice.call(parent.querySelectorAll(selector)) : [];
		}

		// based on underscore.js
		function throttle(func, wait) {
			var timeout = null, previous = 0;
			function run() {
					previous = Date.now();
					timeout = null;
					func();
			}
			return function() {
				var remaining = wait - (Date.now() - previous);
				if (remaining <= 0 || remaining > wait) {
					clearTimeout(timeout);
					run();
				} else if (!timeout) {
					timeout = setTimeout(run, remaining);
				}
			};
		}
	})(".ai2html", {namespace: "g-", setup: window.setupInteractive || window.getComponent});
