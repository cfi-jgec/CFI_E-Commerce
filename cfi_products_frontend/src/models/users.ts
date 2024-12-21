import mongoose, { Schema } from 'mongoose'

type userSchemaType = {
    firstName: string,
    lastName: string,
    mobile: string,
    email: string,
    password: string,
    isVerified: boolean,
    verificationToken: string,
    verificationTokenExpiry: Date,
    forgetPasswordToken: string,
    forgetPasswordTokenExpiry: Date,
}

const userSchema = new Schema<userSchemaType>({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
    },
    verificationTokenExpiry: {
        type: Date,
    },
    forgetPasswordToken: {
        type: String,
    },
    forgetPasswordTokenExpiry: {
        type: Date,
    },
}, {
    timestamps: true,
})

type userModalType = typeof userSchema;

const User = mongoose.models.user || mongoose.model<userModalType>('user', userSchema);
export default User;