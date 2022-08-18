# About Project

Tech stack/tools and its purpose
-------------

 * **React** : for making the single page application
 * **Redux** : for maintaining central state for the app
 * **react-table** : for creating the table inside Home and All Scenario component
 * **styled-component** : Used this as css replacement in Graph component.


Features
-------------------

 * We can **add/edit/delete** scenario
 * We can **add/edit/delete** vehicle within particular scenario
 * We can view the simulation of different vehicle, according to there speed and in respective direction
 * The app is responsive up to some extent.
 
 
Areas that can be improved
-------------------

 * I've used css animation for the vehical simulation, and set the **animation-iteration-count** to 1. So if we need to restart the animation, we have to somehow use a trick and remove the div from the DOM and then bring it back. So for now, if we want to restart animation, we can always do referesh.
 * Used basic validation, this can be improved.
 * Complete Responsiveness can be achieved.
 
 
Some Files
-------------------

 * ***sceneReducer.js*** : This file is contains the code for handling different actions that need to be performed on our state. I have written reducers for the Adding vehicle and scenarios, Editing vehicles and scenarios, and Removing the vehicles and scenarios. Also a Remove all functionality is there, which will return the empty data. 
 * Also I have used localstorage to store the data. Redux store on any changes sync the data with the local storage and, while loading store sync the data with localstorage.
 * ***sceneTable.jsx, vehicalTable.jsx*** : These files implements the table in the All Scenario and Home componets using react-table package.
