[![Build Status](https://travis-ci.org/groenlid/uranime-client.png?branch=master)](https://travis-ci.org/groenlid/uranime-client)

Demo: http://groenlid.com
![ScreenShot](https://raw.github.com/groenlid/uranime-client/master/md/screenshot-1.png)

Need a fix for this: http://jsfiddle.net/DDQK4/3/

Todo
==

Important:
--
* Implement https://github.com/jamesarosen/ember-i18n
* Notifications based on genres/tags when new anime appears
* Hide shows from the calendar
* Remove all references to App.store. Should use through controller or route.
* ~~Make a calendar~~

Episode-Modal
--
* ~~Next-Previous episodes from episode-modal~~
* Esc from episode-modal - Click outside box
* Bigger buttons for next/prev. Alternatively swipe for next/prev or arrowkeys
* When moving between episodes, the last-activity column (height) is not re-calculated.
* Users should be able to comment each episode

Search
--
* Empty search should not send query to server
* Search by tags/genre
* Sort by rating
* Layout for detailed list
* Paginate
//* When searching, the search result anime titles should show the matching synonym.

Library
--
* ~~Pagination~~
* ~~Make each pagination into Ember.Collectionview~~

Anime
--

* Anime "overview page" should give the 10 latest added anime
* The user should be able to sort by date added or Alphabetical
* Select a character to show all anime beginning with this char.
** Need to change backend for this.
* Capitalize tags/genres
* To crowded with all on same page tags/genres.

Calendar
--

Anime-Details
--

* Different layout for movies and series 
* ~~Click episode does not open modal in all browsers.~~
* Comments and activities
* Add MAL-AniDb-TheTVDb links
* Last Seen by wrong date on "last"
* ~~Constrain size of episode-thumbnail~~
* Link on anime title in last-aired-episodes should be removed.

Episodes
--
* ~~Pagination~~
* When entered, page with the currently aired episode is shown.


ServerSide
==

*Image-Resizer in nodejs




TODO:
===
* ~~Jeg liker hånd på alt av linker~~
* ~~Tooltip tingen over "Last seen by" brukere forventa jeg at skulle komme opp og gå bort ved hover-in/out~~
* Denne lista burde også har brukernavn(?)
* ~~Under last avtivity når man ser på info om en episode, så burde scrollinga dekt hele vindu~~
* ~~Datoen/klokkeslettet nederst i samme vindu burde bare være dato, eller anderledes formatert(?)~~
* ~~Hadde vært litt kult hvis "& tags" ble bold når du trykka på "more" Som sagt, bare småshit. ~~

===
Tror det blir sånn typ:
- sender at jeg ser film
- hvis det går 140 min (som er så lang filmen er) så blir den satt til watched
- hvis den blir canceled i løpet av de 140 minuttene så skjer det ikkeno
