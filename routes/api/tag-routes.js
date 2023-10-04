const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include:[{ model: Product, as: 'products' }],
    })
    res.json(tags);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
 try {
  const tagsId = await Tag.findByPk(req.params.id, {
    include:[{ model: Product, as: 'products' }],
  })
  res.json(tagsId);
 }
 catch (err) {
  res.status(500).json(err);
 }
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body)
    res.json(newTag);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    if (!updatedTag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.json(updatedTag);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = Tag.destroy({
      where: {
        id: req.params.id,
      }});

      if (!tagData) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }

      res.json(tagData);
    
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
