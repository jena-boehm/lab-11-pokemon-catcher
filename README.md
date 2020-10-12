# lab-11-pokemon-catcher

1) First, you will select three random photos from the available pokemon and display them side-by-side-by-side in the browser window.

2) Then, you'll want to be able to receive clicks on those displayed pokemon images, and track those clicks for each pokemon. You'll also want to track how many times each pokemon is displayed and each time each pokemon is clicked. Do this for:
    - A single, individual user session (which the user can click a clear button to play again)
    - STRETCH: Add the session to an array of all sessions stored in local storage. This can be used to report on all-time results. This will be an array of arrays. 

3) When the user clicks on a pokemon, three new non-duplicating random pokemon images need to be automatically displayed. The three pokemon images that are displayed should contain no duplicates.
    - [AS A PRETTY FREAKING HARD STRETCH GOAL: nor should they duplicate with any pokemon images that we displayed immediately before (you may want to layer in this second requirement after the first is working)].
    - Additional stretch: Below each image, show how many of this kind of pokemon the user has encountered already, and how many they've already captured. 

---

HTML elements: 


ON MAIN PAGE:
    - 3 radio buttons with image tags
        - the same name for each 
        - wrap in label tag
        - values
    - button to catch pokemon
    - button to clear and initialize state
    - span to display results
    - span to display total 

ON RESULTS PAGE:
    - div with all pokemon
        - total encounters
        - total captures
    - button

---

JavaScript:


- Grab DOM elements

- Initial state:
    - Pokemon data
    - Total tries = 0
    - Pokemon encountered = 0 
    - Pokemon captured = 0 

- Event Listener
    - On click of catch button:
        - Increment clicks
            - When clicks reach 10, go to results page
        - Grab value of selection
        - Increment encountered for each pokemon displayed
        - Increment captured for each pokemon captured
        - Display 3 more random pokemon 
        - Clear radio button selection 
            - toggle.display something

- Results page:
    - List pokemon
        - Total encounters
        - Total captured
    - Button
        - Clears local storage 
        - Redirects to main page
        




