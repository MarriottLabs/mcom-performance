marriott.com performance hackathon
==================================

Submission information
----------------------

To participate in the hackathon and to deploy your site to the http://labs.marriott.com/ site, you will need to fork this repository, and submit your changes in a pull request.

**Click on the fork button located near the top of this page.**

![Fork Highlight](http://labs.marriott.com/docs/images/fork_highlight.jpg)

**Clone your copy locally.**

```bash
git clone https://github.com/your-github-username/mcom-performance
```

**Make your changes.**

It's generally a good idea to work off of branches. In the example below I'll create a branch called speed-boost.

```bash
git checkout -b speed-boost
```

Now feel free to edit the files how you'd like, using whatever method you are comfortable with.

**Commit changes and push to your cloned repository.**


The example command below shows how I would add and commit my changes to my modified ```index.html``` file.
```bash
git add index.html
git commit -m 'Added 10x speed boost to index.html'
git push origin speed-boost
```

**Submit a Pull Request with your changes**

Once you've pushed your work to GitHub, you can open a Pull Request. 

For more information on this process, refer to the [GitHub Forking Projects](https://guides.github.com/activities/forking/) guide.

There is a special process in place for this repository that takes submitted pull requests and previews the code changes. You will see a bot
account commenting on your pull request with more information.

![Bot Example](http://labs.marriott.com/docs/images/bot_example.jpg)

Technical information
---------------------

**Marriott.com performance hackathon includes following pages**
* Search results
* Ratelist menu - Reservation
* Hotel website home page

Marriott.com web application is fully responsive.  We also use susy grid for layouts, which uses different breakpoints as below.
* XS -	240px
* S - 320px
* SM - 480px
* M	- 560px
* MML	- 672px
* ML - 768px
* MLL - 864px
* L - 960px
* XL - 1024px
* XXL - 1200px
* XXXL - 1400px



**Below is the list of some of the javascript**
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

**CSS is generated using SASS. SASS files internally call partials which are per component.**
*	foundation_all.css – This file contains all the base, reset, layout classes
*	reservations.css,hws.css, search.css  - There is one main css file for each product.
*	brands.css – This file consist of main brands file for brand color, button colors,
*	brand_xx.css – This a brand overwrite css file for style variations
*	marriottPrint.css – This file is been used for printing a web page
*	IEOverride.css – This file is used for IE override for global components like header, footer.
*	HWS-ie.css – This is the product IE specific overwrite css.

