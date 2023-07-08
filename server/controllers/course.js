const Course = require('../models/course');
const User = require('../models/user');
const formidable = require('formidable');
const fs = require('fs');

// User
exports.courses = async (req, res) => {
  const courses = await Course.find();
  res.json({ courses });
};
exports.course = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    console.log(course);
    if (course) {
      res.json({ course });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.purchaseCourse = async (req, res) => {
  console.log(req.params);
  const course = await Course.findById(req.params.courseId);
  if (course) {
    const user = await User.findOne({ email: req.user.email });
    if (user) {
      user.purchasedCourses.push(course);
      await user.save();
      res.json({ message: 'Course purchased successfully' });
    } else {
      res.status(403).json({ message: 'User not found' });
    }
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
};

exports.createCourse = async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({
      error: 'Please include all fields'
    });
  }
  let course = new Course(req.body);
  course.save();
  res.json({ message: 'Course created successfully', courseId: course.id });
};

exports.updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
  if (course) {
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
};
