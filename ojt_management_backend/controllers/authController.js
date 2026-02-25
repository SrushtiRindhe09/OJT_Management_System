const Student = require("../models/student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerStudent = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Student.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Student Registered Successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: student._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
      },
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};