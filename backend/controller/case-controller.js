import Case from "../model/case.js";

export const addCase = async (req, res) => {
  try {
    const client_case = await new Case({
    
      title: req.body.title,
   
      description: req.body.description,
      parties_involved:req.body.parties_involved,
      lsp_email: req.body.lsp_email,
      
      client_email: req.body.client_email,
    
      
    });

    await client_case
      .save()
      .then(() => {
        res.status(200).json({
          message: "successfully saved",
          details: client_case,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "failed to register",
          details: err,
        });
        console.log(err);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getCases = async (req, res) => {
  const lsp_email = req.body.email;

  try {
    // Assuming there is a field 'lsp_email' in your Case schema
    const cases = await Case.find({ lsp_email: lsp_email });
    res.status(200).send(cases);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const fetchCase = async (req, res) => {
    try {
      const client_case = await Case.findById(req.params.id);
  
      res.status(200).json(client_case);
    } catch (error) {
      res.status(500).json(error);
    }
  };

export const acceptCase=async(req,res)=>{
    const query = { _id: req.params.id }; 
    // Update operation
    const update = { $set: { status: "Accepted" } };
  
    try {
      const result = await Case.updateOne(query, update);
      
      res.status(200).json({"message":`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`});
    
    } catch (error) {
        res.status(500).json(error);
    }
}

export const rejectCase=async(req,res)=>{
    const query = { _id: req.params.id }; 

    // Update operation
    const update = { $set: { status: "Rejected" } };
  
    try {
      const result = await Case.updateOne(query, update);
  
      res.status(200).json({"message":`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`});
    } catch (error) {
        res.status(500).json(error);
    }
}



export const closeCase=async(req,res)=>{
  const query = { _id: req.params.id }; 

  // Update operation
  const update = { $set: { status: "Closed" } };

  try {
    const result = await Case.updateOne(query, update);

    res.status(200).json({"message":`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`});
  } catch (error) {
      res.status(500).json(error);
  }
}