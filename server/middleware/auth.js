const admin = require('../firebase');

const checkFirebaseToken = async (req, res, next) => {
    try {
        const token = req.headers.authtoken;
        const decodedToken = await admin.auth().verifyIdToken(token);
        const uid = decodedToken.uid;
        req.user_id = uid;
        next()
    } catch (err) {
        console.log('code broke', err)
        res.status(401).json({
            message: 'No Authenticated user...'
        })
    }
}

module.exports = {
    checkFirebaseToken
}