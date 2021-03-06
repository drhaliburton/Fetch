"use strict";

const express = require('express');
const router  = express.Router();

function auth(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = (knex) => {

// Posts new comment to database

  router.post("/:resource_id", auth, (request, response) => {
    knex('comments')
      .insert({
        body: request.body.content,
        resource_id: request.params.resource_id,
        user_id: request.session.user.id
      })
      .then((results) => {
        response.json(results);
    });
  });

// Renders all card comments

  router.get("/:resource_id", auth, (request, response) => {
      var user = request.session.user;
      knex
        .select("*")
        .from("comments")
        .orderBy('created_at', 'desc')
        .where({
          resource_id: request.params.resource_id
        })
        .then((results) => {
          var commentsArray = [];
          for (var i = 0; i < results.length; i++) {
            var commentObj = {
              id: results[i].id,
              content: results[i].body,
              fullName: user.first_name
            };
            commentsArray.push(commentObj);
          }
          response.json(commentsArray);
        });
      });

  return router;
  
}