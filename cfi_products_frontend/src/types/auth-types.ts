
export interface loginUserType {
    email: string,
    password: string,
};

export interface registerUserType {
    firstName: string,
    lastName: string,
    mobile: string,
    email: string,
    password: string,
};

export interface usersType{
    _id: string,
    firstName: string,
    lastName: string,
    mobile: string,
    email: string,
    isVerified: boolean,
    verificationToken?: string,
    verificationTokenExpiry?: Date,
    forgetPasswordToken?: string,
    forgetPasswordTokenExpiry?: Date,
}

export interface sessionUserType {
    _id: string,
    email: string,
    firstName: string,
    lastName: string,
    isVerified: boolean,
};