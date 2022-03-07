const { toDo } = require('../models/todo.model');

exports.createToDo = async(req, res) => {
    try {
        const { id, content } = req.body

        const newToDo = await toDo.create({
            id,
            content
        });

        res.status(201).json({
            status: 'success',
            data: { newToDo }
        });
    } catch (error) {
        console.log(error);
    }
}

exports.getToDo = async(req, res) => {
    try {
        const AllToDo = await toDo.findAll({
            where: { status: 'active' }
        });
        res.status(200).json({
            status: 'success',
            data: { AllToDo }
        });
    } catch (error) {
        console.log(error)
    }
}
exports.updateToDo = async(req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        const upToDo = await toDo.findOne({
            where: { id, status: 'active' }
        })

        if (!upToDo) {
            res.status(404).json({
                status: 'error',
                message: 'Cant update post, invalid ID'
            });
            return;
        }

        await upToDo.update({
            content
        });
        res.status(204).json({ status: 'success' });
    } catch (error) {
        console.log(error)
    }
}

exports.deleteToDo = async(req, res) => {
    try {
        const { id } = req.params;
        const upToDo = await toDo.findOne({
            where: { id, status: 'active' }
        })

        if (!upToDo) {
            res.status(404).json({
                status: 'error',
                message: 'Cant update post, invalid ID'
            });
            return;
        }

        await upToDo.update({
            starus: 'deleted'
        });
        res.status(204).json({ status: 'success' });
    } catch (error) {
        console.log(error)
    }
}