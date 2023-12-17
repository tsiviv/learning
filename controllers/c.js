class generalOpinion {


  AddOpinion = (async (req, res) => {
    
    res.send("add")
  })
  GetOpinionById = (async (req, res) => {
   
    res.send(req.params)
  })
  updateopinon = (async (req, res) => {
    
    res.send("update"+ req.params)
  })
  deleteopinion = (async (req, res) => {
    const { opinionid } = req.params
    await generalOpinionDal.deleteopinion(opinionid)
    res.send("delete")
  })
  

}
const generalOpinionclass = new generalOpinion();
module.exports = generalOpinionclass;