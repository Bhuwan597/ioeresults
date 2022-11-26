const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormNoSchema = new Schema({
    FormNo: {
        type: String,
    },
   "Applicant's_Name": {
        type: String,
    },
    Rank: {
        type: Number,
    },
    District: {
        type: String,
    },
});
module.exports = mongoose.model('ioe_results', FormNoSchema);