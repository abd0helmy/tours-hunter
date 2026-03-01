import catchAsync from '../utils/catchAsync.js';
import Review from './../models/reviewModel.js';
import { getAll, getOne, createOne } from './handlerFactory.js';
import AppError from './../utils/appError.js';

export const setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

export const getAllReviews = getAll(Review);
export const getReview = getOne(Review);
export const createReview = createOne(Review);
export const updateReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  console.log(review.user._id.toString());

  if (!review) {
    return next(new AppError('No review found with that ID', 404));
  }

  if (review.user._id.toString() !== req.user._id.toString()) {
    return next(new AppError('You are not allowed to update this review', 403));
  }

  const updatedReview = await Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  res.status(200).json({
    status: 'success',
    data: { review: updatedReview },
  });
});

export const deleteReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return next(new AppError('No review found with that ID', 404));
  }

  if (review.user._id.toString() !== req.user._id.toString()) {
    return next(new AppError('You are not allowed to delete this review', 403));
  }

  await Review.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
