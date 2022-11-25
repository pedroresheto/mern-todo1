import { Router } from "express";
import Item from '../models/Item.js'

const router = Router()


//create item
router.post('/', async (req, res) =>{
    try {
        //const { item } = req.body

        const newItem = new Item({
            item: req.body.item
        })

        const saveItem = await newItem.save()
        res.status(200).json(saveItem)
    } catch (error) {
        console.log(error);
    }
})

//get request
router.get('/', async (req, res) =>{
    try {
        const posts = await Item.find({})
        return res.json({posts})
    } catch (error) {
        console.log(error);
    }
})

//update item

router.put('/:id', async (req, res)=>{
    try {
        await Item.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json('item updated')
    } catch (error) {
        console.log(error);
    }
})

//delete item

router.delete('/:id', async (req, res)=>{
    try {
        await Item.findByIdAndDelete(req.params.id)
        res.status(200).json('item deleted')
    } catch (error) {
        console.log(error);
    }
})

export default router

