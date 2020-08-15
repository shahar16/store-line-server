/**
 * This middleware for images uploads.
 */
const multer = require( "multer" );

/**
 * This function determine the location and file name.
 */
const storage = multer.diskStorage( {
	destination: function ( req, file, cb ) {
		cb( null, './uploads' );
	},
	filename: function ( req, file, cb ) {
		const randomNumber = Math.floor(Math.random() * 10000);
		cb( null, `${req.userEmail}-${randomNumber}-${file.originalname}` )
	}
} );

/**
 * this function wil filter unsupported files
 */
const fileFilter = function ( req, file, cb ) {
	if ( file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif' ) {
		console.log( 'Image upload successfully to server' );
		cb( null, true );
	} else {
		cb( new Error( 'File mimType not supported' ), false );
	}
};

const upload = multer( {
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5 //5MB
	},
	fileFilter: fileFilter
} );

module.exports = upload.array( 'image', 10 );