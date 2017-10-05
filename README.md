# jquery-bootstrap-modal-statesman
State management for Bootstrap's modals.  Help to support multi-modal pages.

# Basic Usage

## Setup
~~~
/* Include Script */
<script src="js/jquery.statesman.js"></script>


/* Initialize jQuery Statesman */
var Statesman = $.fn.Statesman();
Statesman.init();
~~~

## Statesman uses Id's to track modals, and this is how you will call them as well
*Please make sure each of your modals has a unique Id*

## Get States
~~~
/*
 *  Assume you have a modal with the Id of 'myModal'
 */
Statesman.getState('myModal');  // Returns 'open' or 'closed'
Statesman.isOpen('myModal');  // Returns true or false
Statesman.isClosed('myModal');  // Returns true or false
~~~

## TODO:
Better documentation

Live demo

Allow identifier to be set in settings