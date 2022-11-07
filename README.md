# Express Routers (lecture starter code)

Routers (routing modules) can be used to organize code. 

They are very similar to how we would use a module to contain logic, classes, or data. The difference is that routers must export a route (URL to function mapping) `module.exports = router;`. All traffic goes into our `server.js` file and flows into the corresponding router.

This code starts with all of the routes in the `server.js` file. We'll look at how to move them into a module file. 