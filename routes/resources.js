"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (request, response) => {
    knex
    .select("*")
    .from("resources")
    .then((results) => {
      response.json(results);
    });
  });

  router.get("/:filter", (request, response) => {
    const categoryFilter = request.params.filter;
    knex
    .select("*")
    .from("resources")
    .where({category_id: categoryFilter})
    .then((results) => {
      console.log(results);
      response.json(results);
    });
  });


  router.post("/:resource_id", (request, response) => {
    const resource_id = request.params.resource_id;
    const cardUrl = request.body.cardUrl;
    const cardTitle = request.body.cardTitle;
    const cardImage = request.body.cardImage;
    const cardDescription = request.body.cardDescription;
    const cardCategory = request.body.cardCategory;
    const cardUserId = request.session.userId;

    knex('resources')
      .where({id: resource_id})
      .update({url: cardUrl, 
              image: cardImage, 
              title: cardTitle, 
              description: cardDescription,
              user_id: cardUserId,
              category_id: cardCategory})
      .then((results) => {
        console.log("success!");
        response.json(results);
    });
  });

  // Search endpoint
  router.get("/search", (request, response) => {
    console.log("server reached!");
    response.send('Hello World!')
   /* const searchTerm = request.params.searchTerm;

    knex ('resources')
      .where('url', 'like', `%${searchTerm}%`)
      .orWhere('title','like', `%${searchTerm}%`)
      .orWhere('description', 'like', `%${searchTerm}%`)
      .then((results) => {
        console.log("success!");
        response.json(results);
    });*/
  });

  return router;

};
// VIEW USER RESOURCES = GET /user/:id/fetch
// VIEW SPECIFIC RESOURCE = /GET /user/:id/fetch/:id
// ADD RESOURCE = POST /user/:id/fetch/:id
// DELETE RESOURCE = DELETE /user/:id/fetch/:id
// EDIT RESOURCE = POST /user/:id/fetch/:id

// RATE RESOURCE = POST /user/:id/fetch/:id/rate, DELETE /user/:id/fetch/:id/rate

// COMMENT ON RESOURCE = POST /user/:id/fetch/:id/comment, DELETE /user/:id/fetch/:id/comment
