const express = require('express');
const {
  courses,
  course,
  purchaseCourse,
  updateCourse,
  createCourse
} = require('../controllers/course');
const { authenticateJwtUser, authenticateJwtAdmin } = require('../controllers/auth');
const router = express.Router();

router.get('/user/courses', courses);
router.get('/user/course/:courseId', course);
router.post('/user/course/:courseId', authenticateJwtUser, purchaseCourse);

router.post('/admin/course/create', authenticateJwtAdmin, createCourse);
router.put('/admin/courses/:courseId', authenticateJwtAdmin, updateCourse);

module.exports = router;
