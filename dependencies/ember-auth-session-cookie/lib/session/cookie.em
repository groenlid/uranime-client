$ = jQuery
class Em.Auth.CookieAuthSession extends Em.Auth.AuthSession
  retrieve: (key, opts) ->
    $.cookie key

  store: (key, value, opts) ->
    $.cookie key, value, $.extend(true, { path: '/' }, opts)

  remove: (key, opts) ->
    $.removeCookie key, $.extend(true, { path: '/' }, opts)
