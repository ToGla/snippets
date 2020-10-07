// Create matchMedia queries

(function watchMedia() {
  // Configure breakpoints
  const mediaMatchConfig = {
    mobile: "(max-width: 580px)",
    tablet: "(min-width: 581px) and (max-width: 1024px)",
    desktop: "(min-width: 1025px)",
  };

  // create a match function bound to a key
  // wich identifies our breakpoint 
  // add the breakpoint class to document.body
  const getMatchFunction = (key) => (event) => {
    console.log('match', event.matches);
    if (event.matches) {
      document.body.classList.add(key);
    } else {
      document.body.classList.remove(key);
    }
  };
  // Iterate our breakpoints
  Object.entries(
    mediaMatchConfig
  ).forEach(([key, query]) => {
    const onMatch = getMatchFunction(key);
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener('change', onMatch);
    // Execute our match function once to set 
    // the correct breakpoint for current media
    onMatch(mediaQuery);
  });
})();

// And there we have it. Now our site will be all set
// to respond to mobile, tablet and desktop breakpoints
// Note. since we of course design mobile first the
// mobile breakpoint really shouldn't be there...
