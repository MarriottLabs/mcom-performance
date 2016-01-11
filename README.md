
**Marriott.com web application uses many JavaScript files.  Below is the list of some of the javascript**
*	micorelib - This file combines and minifies multiple files. This file includes following files - jquery, jquery ui, plugins like jcarouselLite, maginficPopup
*	sitecatalystlib, omniTrackRun – This file contains javascript required for the tracking
*	socialShareRewards 
*	dwrall.js – This js file is used to upload
*	reservationslib – This file contains all the javascript required for rate list menu page. This file is different for each product. Eg. hwslib is for HWS and propertySearchScripts is for Search results.
*	mi_customer_survey – This file uses to show third party survey popup
*	clickToChat – This used to trigger chat window.
*	Gigya – Used for Social login
*	Ensighten - tracking
*	Monetate - 
*	Roomkey – This is used to display roomkey popup.
*	Adara – This is used to collect data for behavioral targeting
*	Bluekai 
*	Googleads
*	Tagman
*	behavioralTargeting
*	doubleClick

**CSS is generated using SASS. SASS files internally call partials which are per component. We also use susy grid for layout.**
*	foundation_all.css – This file contains all the base, reset, layout classes
*	reservations.css,hws.css, search.css  - There is one main css file for each product.
*	brands.css – This file consist of main brands file for brand color, button colors,
*	brand_xx.css – This a brand overwrite css file for style variations
*	marriottPrint.css – This file is been used for printing a web page
*	IEOverride.css – This file is used for IE override for global components like header, footer.
*	HWS-ie.css – This is the product IE specific overwrite css.
