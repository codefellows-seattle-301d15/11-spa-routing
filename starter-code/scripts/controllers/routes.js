/* TODONE: Configure our two routes for this app with page.js,
    by registering each URL your app can handle, linked to a
    single controller function to handle it: */

page('/about', aboutController.reveal);
page('/', articleController.reveal);

page();

// TODONE: What function do we call to activate page.js?
