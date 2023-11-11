const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    mainTopic: String,
    subTopic: [{
        openQuestions: {
            questionsVariants: [String],
            answer: String,
        },
        multipleChoice: {
            questionsVariants: [String],
            answer: [Number],
            answerVariants: [String],
        },
    }],
});

const QuestionModel = mongoose.model('Question', QuestionSchema);

module.exports = QuestionModel;
