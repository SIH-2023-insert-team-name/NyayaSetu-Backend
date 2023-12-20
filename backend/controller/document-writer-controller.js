import DocumentWriter from "../model/document-writer.js";

export const addDocWriter = async (req, res) => {


  try {
    const docWriter = await new DocumentWriter({
     
      name: req.body.name,
      // email: req.userData.email,
      aadhar: req.body.aadhar,
      profile_pic: req.body.profile_pic,
      gender: req.body.gender,
      age: req.body.age,
      summary: req.body.summary,
      experience: req.body.experience,
      location: req.body.location,
      availability: req.body.availability,
      languages_spoken: req.body.languages_spoken,
      cost: req.body.cost,
      points: req.body.points,
      incentive_level: req.body.incentive_level,
      rating: req.body.rating,
      document_url:req.body.document_url
    });
     
    await docWriter
      .save()
      .then(() => {
        res.status(200).json({
          message: "successfully registered",
          details: docWriter,
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

export const getDocWriters = async (req, res) => {
  try {
    const docWriters = await DocumentWriter.find();
    res.status(200).send(docWriters);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const fetchDocWriter = async (req, res) => {
  try {
    const docWriter = await DocumentWriter.findById(req.params.id);

    res.status(200).json(docWriter);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const altPointsDocWriter = async (req, res) => {
  try {
    const docId = req.body.docWriterId;


    
    const docWriter = await DocumentWriter.findById(docId);

    // Validate if the lawyer is found
    if (!docWriter) {
      return res.status(404).json({ message: 'Document writer not found' });
    }

    // Update the points
    const updatedPoints = docWriter.points + 50;

    // Update the lawyer document
    const result = await DocumentWriter.updateOne({ _id: docId }, { $set: { points: updatedPoints } });

    res.status(200).json({
      message: `Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};




