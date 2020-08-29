const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const CTRL_NAME = "user.controller";
const appDB = require('../resources/fakeDb/fakeDb');

//mongoose model
const User = require("../models/user.model");

function getToken(email) {
	return jwt.sign(
		{ email: email },
		"GuyRonenIsMyBestFriend",
		{ expiresIn: "1h" }
	)
}

exports.login = async (req, res, next) => {

	try {
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		const {
			email,
			password
		} = req.body;
		console.log(`Login:: email: ${email}`);

		const user = await User.findOne({ email: email });
		if (!user) {
			throw new Error(`User: ${email} did not exists`);
		}
		// bcrypt is hashing the password you got from the client and compare it to the hashed password in DB.
		const isEqual = await bcrypt.compare(password, user.password);
		const token = getToken(email);
		const expiresTimeInMiliseconds = 1000 * 60 * 60;
		if (isEqual) {
			return res.status(200).json({
				token: token,
				expiresTimeInMiliseconds: expiresTimeInMiliseconds,
				message: "User Logged in successfully.",
				user: user
			});
		} else {
			throw new Error("Wrong password!");
		}

	} catch (err) {
		err.message = err.message || "There was a problem logging in. Check your email and password or create an account.";
		next(err);
	}
};

exports.register = async (req, res, next) => {
	try {
		console.log(req.body);
		console.log((Object.entries(req.body)));
		if (Object.entries(req.body).length === 0) {
			throw new Error("Request body is empty.");
		}

		const {
			email,
			password,
			firstName,
			lastName,
			city,
			street,
			houseNum
		} = req.body;
		console.log(`Register:: email: ${email}`);

		const userExists = await User.findOne({ email: email });
		if (userExists) {
			throw new Error(`User: ${email} already exist.`);
		}

		const address = {
			city: city,
			street: street,
			houseNum: houseNum
		}

		const hashPassword = await bcrypt.hash(password, 12);
		const newUser = new User({
			email: email,
			password: hashPassword,
			firstName: firstName,
			lastName: lastName,
			defaultShippingAddress: address
		});
		await newUser.save();

		const expiresTimeInMiliseconds = 1000 * 60 * 60;
		const token = getToken(email);

		const registerSuccessMsg = {
			message: `User: ${email} created successfully.`,
			user: newUser,
			token: token,
			expiresTimeInMiliseconds: expiresTimeInMiliseconds
		};

		if (req.mode === "db") {
			console.log("db mode");
			console.log(registerSuccessMsg);
			next();
		} else {
			return res.status(200).json(registerSuccessMsg);
		}
	} catch (err) {
		err.message = err.message || "There was a problem with createing this new order.";
		next(err);
	}
};

exports.seedUsers = async (req, res, next) => {
	console.log("Seed users");
	const users = [
		{ email: "shaharyig@gmail.com", password: "123456", firstName: "shahar", lastName: "yigal" },
		{ email: "danielahrak@gmail.com", password: "123456", firstName: "daniel", lastName: "ahrak" },
		{ email: "Duis.dignissim@vitae.net", password: "16981130", firstName: "djhqj", lastName: "bbbcm" },
		{ email: "non@eratEtiam.ca", password: "16070401", firstName: "djhqj", lastName: "bbbcm" },
		{ email: "pulvinar@pedesagittis.ca", password: "16370206", firstName: "djhqj", lastName: "bbbcm" },
		{
			email: "vehicula.et.rutrum@DonectinciduntDonec.co.uk", password: "16741211", firstName: "djhqj",
			lastName: "bbbcm"
		},
		{ email: "euismod@liberodui.ca", password: "16190405", firstName: "djhqj", lastName: "bbbcm" },
		{ email: "faucibus.ut@atsem.ca", password: "16290526", firstName: "djhqj", lastName: "bbbcm" },
		{ email: "placerat.augue.Sed@Fuscediam.com", password: "16291002", firstName: "djhqj", lastName: "bbbcm" },
		{ email: "in@risusNulla.co.uk", password: "16910521", firstName: "djhqj", lastName: "bbbcm" },
		{ email: "pede.Nunc@nibh.org", password: "16980220", firstName: "djhqj", lastName: "bbbcm" },
		{ email: "aliquam@nullaanteiaculis.net", password: "16510623", firstName: "djhqj", lastName: "bbbcm" },
		{ email: "consectetuer.ipsum@risusIn.com", password: "16180129", firstName: "djhqj", lastName: "bbbcm" },
		{ email: "congue.In@NullafacilisiSed.org", password: "16700625", firstName: "djhqj", lastName: "bbbcm" },
		{
			email: "turpis.nec.mauris@odioauctorvitae.co.uk", password: "16510420", firstName: "djhqj",
			lastName: "bbbcm"
		},
		{ email: "magna.et.ipsum@pede.org", password: "16051114", firstName: "djhqj", lastName: "bbbcm" },
	];


	users.forEach(async el => {
		const userExists = await User.findOne({ email: el.email });
		if (userExists) {
			console.log(`User: ${el.email} is already exists.`)
		}
		const hashPassword = await bcrypt.hash(el.password, 12);
		const newUser = new User({
			email: el.email,
			password: hashPassword,
			firstName: el.firstName,
			lastName: el.lastName
		});

		try {
			await newUser.save();

		} catch (err) {
			err.message = "There was a problem with Seeding dummy users.";
			next(err);
		}
	});


	return res.status(200).json({
		message: "Seed dummy users to DB."
	});
};

exports.addDbUsers = async (req, res, next) => {
	const fn = CTRL_NAME + "::addDbUsers";

	try {
		await appDB["users"].forEach((singleUser) => {
			req.body = singleUser;
			req.mode = "db";
			this.register(req, res, next);
		})

		return res.status(200).json({
			message: `${fn} db users has been added successfully`
		})
	} catch (err) {
		err.message = (`${fn}: ` + err.message) ||
			(`${fn}: failed to add new db Users`);
		next(err);
	}
}

exports.removeAllUsersFromDb = async (req, res, next) => {
	console.log("Remove all users from DB");

	try {
		await User.deleteMany({});
	} catch (e) {
		e.message = "Failed to remove all users from DB";
		console.log(e.message);
		next(e);
	}

	return res.status(200).json({
		message: "Removed all users from DB."
	});
};


