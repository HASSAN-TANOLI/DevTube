import { createError } from "../error.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    // match it with req.user.id which is jwt id
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "you can only update your account"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted successfully");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const subscribe = async (req, res, next) => {
  //in subsrcibe we are taking an id of other users.

  try {
    await User.findById(req.user.id, {
      $push: { subscribeUsers: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subcribers: 1 },
    });
    res.status(200).json("Subscription succefull");
  } catch (err) {
    next(err);
  }
};

export const unsubsribe = async (req, res, next) => {
  try {
    await User.findById(req.user.id, {
      $pull: { subscribeUsers: req.params.id },
    });

    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribes: -1 },
    });
  } catch (err) {
    next(err);
  }
};

export const like = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const dislike = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
