const QuestionModel = require('../models/questionModel');

exports.createQuestion = async (req, res) => {
    try {
        const question = new QuestionModel(req.body);
        const savedQuestion = await question.save();
        res.json(savedQuestion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getQuestions = async (req, res) => {
    try {
        const questions = await QuestionModel.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getQuestionById = async (req, res) => {
    try {
        const questionId = req.params.id;
        const question = await QuestionModel.findById(questionId);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json(question);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateQuestion = async (req, res) => {
    try {
        const questionId = req.params.id;
        const updatedQuestion = await QuestionModel.findByIdAndUpdate(
            questionId,
            req.body,
            { new: true } // Return the modified document rather than the original
        );
        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteQuestion = async (req, res) => {
    try {
        const questionId = req.params.id;
        const deletedQuestion = await QuestionModel.findByIdAndRemove(questionId);
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
