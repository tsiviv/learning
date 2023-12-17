const express=require("express")
const generalopinionRouter = express.Router();//

const generalopinioncontrollers = require("../controllers/c");
 //opinion
 generalopinionRouter.route("/")
 .post(generalopinioncontrollers.AddOpinion)
 generalopinionRouter.route("/:opinionid")
 .delete(generalopinioncontrollers.deleteopinion)
 .get(generalopinioncontrollers.GetOpinionById)
 .get(generalopinioncontrollers.updateopinon)

 //////
 
 
 module.exports = generalopinionRouter;

 
 