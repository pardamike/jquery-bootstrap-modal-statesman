# jquery-bootstrap-modal-statesman
State management for Bootstrap's modals.  Helps to support multi-modal pages in Bootstrap.

*Currently only for Bootstrap 3.x, have not tested with 4.x*

### I will preface this by saying that stacking modals and opening more than 1 on a page is *not* ideal or recommended for obvious UI/UX reasons, and really should never be used.  However...

We've all been there; the client demands mulitple modals, stacking modals, etc, and cannot be talked out of it.  You're stuck using jQuery and Bootstrap because this is an enormous and older enterprise application.  You notice `show` and `hide` events causing other modals to fire their `show` and `hide` events, and you have no way to keep track of what is really open and what isnt.  Then you read in the [Bootstrap Docs](https://getbootstrap.com/docs/3.3/javascript/#modals) and see that Bootstrap doesnt support multiple modals open.  What do to?

Thats where jQuery Statesman comes in.  Statesman will keep track of which modals are open, and which are closed, including dynamic modals.  Want to know if a modal is open?  Just ask Statesman, and you are on your way.

# Basic Usage

## Setup
~~~
/* Include Script */
<script src="js/jquery.statesman.js"></script>


/* Initialize jQuery Statesman */
var Statesman = $.fn.Statesman();
Statesman.init();
~~~

#### Statesman uses Id's to track modals, and this is how you will call them as well
*Please make sure each of your modals has a unique Id*

## Get States
Assume you have a modal with `id="myModal"`
~~~
Statesman.getState('myModal');  // Returns string 'open' or 'closed'
Statesman.isOpen('myModal');  // Returns bool true or false
Statesman.isClosed('myModal');  // Returns bool true or false
~~~

## TODO:
Better documentation
Live demo
Add documenation for settings
Allow identifier to be set in settings
More features!
