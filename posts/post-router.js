const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
   db('posts') // = db.select().from('posts')
      .then(posts => {
         res.json(posts)
      })
      .catch(err => {
         res.status(500).json({message: 'error retrieving posts', err})
      })
});

// router.get('/:id', (req, res) => {
//    const { id } = req.params

//    db('posts')
//       .where({ id })
//       .then(posts => {
//          const post = posts[0]
//          post
//             ? res.status
//       })
// });

router.post('/', (req, res) => {
   const postData = req.body

   db('posts')
      .insert(postData)
      .then(post => {
         res.status(201).json(post)
      })
      .catch(err => {
         res.status(500).json({message: 'failed to create a new post', err})
      })
});

router.put('/:id', (req, res) => {
   const { id } = req.params
   const changes = req.body

   db('posts')
      .where({ id })
      .update(changes)
      .then(count => {
         count
            ? res.json({ updated: count })
            : res.status(404).json({ message: 'invalid id' })
      })
      .catch(err => {
         res.status(500).json({ message: 'there was an error', err})
      })
});

router.delete('/:id', (req, res) => {
   const { id } = req.params

   db('posts')
      .where({ id })
      .del()
      .then(count => {
         count > 0
            ? res.status(200).json({ message: 'record deleted succesfully' })
            : res.status(404).json({ message: 'post not found' })
      })
      .catch(err => {
         res.status(500).json({ message: 'there was an error'})
      })
});

module.exports = router;