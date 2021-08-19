# Selina

For run app

`yarn start`

FRONT END

OVERVIEW
In this assignment you will create a React application. The application is a “marketing site” that
will provide information on all Selina locations and events that take place in each location.
The focus of this assignment is to have a clean and organized project. Both on the application
and in the code and file structure. No design is provided but you should aspire to have a ‘clean’
looking app.
Using existing APIs you can find all the information needed to present all selina locations and to
present the events of these locations.

Guidelines
No CSS framework
Hooks
Responsive UI: Desktop / Tab / Mobile

API’s to use:
https://locations.selinatech.com/locations
This will return a list of locations including the content of each location.
https://events.selinatech.com/events/aggregated/<LOCATION-ID>
This will return events that take place at a specific location.
You can use location id’s from the first call as parameters for the second call.

SPECIFICATIONS
Main Page
This is the homepage of the app. It consists of 3 parts:
1. Top navigation bar
2. Main section
3. A Footer
Top Navigation Bar
Left side - Selina logo.
Right side - one item “Locations”.
This “Locations” item - on hover - should open a menu of all countries and each country on hover
should open a sub menu with all the locations within that country. On clicking a location it should
lead to a new page - the “Location Page”.
Main Section
Just a single image
Footer
A footer with black background. 3 random locations in the footer that link to the location page.

Bonus front end 1 - Location Page
A location page presents details of that specific location.
The page consists of:
1. The same Navigation bar,
2. Image Carousel.
3. Content about the location.
4. Event Section
5. Footer
Image Carousel
Images from the location.
Content about the location
- Location Name
- Description
- Other content from the response
Event Section
This section uses the 2nd API to get events per location.
A date picker should allow a user to select a date range with up to a month ahead.
The selected dates filter the results that are provided in the API.
For each event - display its content.

Footer
The same footer with black background. 3 random locations in the footer that link to the location
page.

Bonus front end 2
- Create the carousel of images with an animation and a slider.
- Add some buttons with CSS animations to the project
- Also - feel free to surprise us with anything you find cool!