


const Email = require("../model/email");

exports.saveSentEmail = async(request , response) => {
    try {
        const email = await Email(request.body);
        email.save();
        response.status(200).json(`saved email: ${email}`);
    } catch (error) {
        response.status(500).json(error.message);
    }
};


exports.getEmails = async(request , response) => {
    try {
        let emails;
        if (request.params.type === 'bin') {
            emails = await Email.find({ bin: true });
        }else if (request.params.type === 'all mail') {
            emails = await Email.find({});
        }else if (request.params.type === 'starred') {
            emails = await Email.find({ starred: true , bin: false});    
        }else{
            emails = await Email.find({type: request.params.type});
        }
        
        return response.status(200).json(emails);
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message);
    }
};


exports.moveEmailToBin = async(request , response) => {
    try {
        await Email.updateMany({_id: { $in: request.body }}, { $set: { bin: true , starred: false , type: ''}});

        
        return response.status(200).json('email deleted successfully');
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message);
    }
};

exports.toggleStarredEmails = async(request , response) => {
    try {
        await Email.updateOne({_id: request.body.id } , { $set: { starred: request.body.value }});

        
        return response.status(200).json('email starred successfully');
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message);
    }
};

exports.deletedEmail = async(request , response) => {
    try {
        await Email.deleteMany({_id: { $in : request.body }});

        
        return response.status(200).json('email deleted successfully');
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message);
    }
};