import { Router } from 'express'
import { fetchItemsByQuery } from '../service/item.js'
import { defaultAutor } from '../middleware/defaultAutor.js'
const router = Router();

const getItemById = (req, res, next) => {
  if (req.params.id) {
    res.json({ message: 'id' })
  }
}

const getItemsByQuery = async (req, res, next) => {
  const query = req.query.q
  if (query) {
    const items = await fetchItemsByQuery(query)
    res.json({ author: res.author, items })
  } else {
    res.json({ author: null, items: [] })
  }
}

router.use('/:id', defaultAutor, getItemById)
router.use('/', defaultAutor, getItemsByQuery)

export default router;