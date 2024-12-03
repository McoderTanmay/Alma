const mongoose = require('mongoose');

const experiance = {
    companyName:{
        type: String,
    },
    position:{
        type: String,
    },
    duration:{
        type: String,
    },
    about:{
        type: String,
    }
}

const userSchema = mongoose.Schema(
    {
        FullName:{
            type: String,
            require: true
        },
        universityID:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true
        },
        userType:{
            type: String,
            enum: ['alumni', 'student'],
            require: true
        },
        passoutYear:{
            type: Number,
        },
        experiance,
        profle:{
            type: String,
        },
        forum:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Forum",
        },
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }
    }
)

const User = mongoose.model("User", userSchema);
module.exports = User; 