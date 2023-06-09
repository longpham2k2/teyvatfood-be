import db from "../models/index";
/**
 * Get a list of all foods
 */
const getAll = async (req, res) => {
  try {
    let data = await db["food"].findAll();
    res.status(200).json(data);
    res.end();
  } catch (err) {
    res.status(404);
    res.end("404 Not Found");
    console.error(err);
  }
};

/**
 * Inserts new food into database
 * @param {*} req
 * @param {*} res
 */
const create = async (req, res) => {
  let formData = {
    name: req.body.name,
    rarity: req.body.rarity,
    type: req.body.type,
    effect: req.body.effect,
    description: req.body.description,
    iconPath: req.body.iconPath,
  };
  try {
    await db["food"].create(formData);
    res.status(200).json({
      status: "success",
    });
    res.end();
  } catch (err) {
    res.status(200).json({
      status: "failure",
      message: err,
    });
    res.end();
  }
};

const get = async (req, res) => {
  try {
    let data = await db["food"].findOne({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(data);
    res.end();
  } catch (err) {
    res.status(404);
    res.end("404 Not Found");
    console.error(err);
  }
}

const update = async (req, res) => {
  let formData = {
    name: req.body.name,
    rarity: req.body.rarity,
    type: req.body.type,
    effect: req.body.effect,
    description: req.body.description,
    iconPath: req.body.iconPath,
  };
  try {
    await db["food"].update(formData, {
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json({
      status: "success",
    });
    res.end();
  } catch (err) {
    res.status(200).json({
      status: "failure",
      message: err,
    });
    res.end();
  }
}

const patch = async (req, res) => {
  try {
    let data = await db["food"].findOne({
      where: {
        id: req.params.id,
      }
    });
    let formData = {
      name: req.body.name || data.name,
      rarity: req.body.rarity || data.rarity,
      type: req.body.type || data.type,
      effect: req.body.effect || data.effect,
      description: req.body.description || data.description,
      iconPath: req.body.iconPath || data.iconPath,
    };
    await db["food"].update(formData, {
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json({
      status: "success",
    });
    res.end();
  } catch (err) {
    console.log(err);
    res.status(200).json({
      status: "failure",
      message: err,
    });
    res.end();
  }
}

const destroy = async (req, res) => {
  try {
    await db["food"].destroy({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json({
      status: "success",
    });
    res.end();
  } catch (err) {
    res.status(200).json({
      status: "failure",
      message: err,
    });
    res.end();
  }
}

const getAllTypes = async (req, res) => {
  try {
    let data = await db["foodtype"].findAll();
    res.status(200).json(data);
    res.end();
  } catch (err) {
    res.status(404);
    res.end("404 Not Found");
    console.error(err);
  }
};

module.exports = {
  getAll: getAll,
  create: create,
  get: get,
  update: update,
  patch: patch,
  destroy: destroy,
  getAllTypes: getAllTypes,
};
