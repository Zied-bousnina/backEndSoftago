const partnershipModel = require("../models/partnership.model");
const validatePartnershipInput = require('../validation/partnership')
const validateContactUsInput = require('../validation/ContactUsValidation');
const ContactUsModel = require("../models/ContactUs.model");


const Addpartnership = async (req, res) => {

  const {errors, isValid} = validatePartnershipInput(req.body)
  try {
    if (isValid) {
    const {
      name,
      email,
      tel,
      companyName,
      companyWebSite,
      jobTitle,
      country,
      city,
      companyPresentation,
      partnershipType,
      TargetMarkets,
      DistrubutionSrategy,
      ProjectsForWhichYouPlanToUseTheSolution
    } = req.body;

    const partnership = new partnershipModel({
      name,
      email,
      tel,
      companyName,
      companyWebSite,
      jobTitle,
      country,
      city,
      companyPresentation,
      partnershipType,
      TargetMarkets,
      DistrubutionSrategy,
      ProjectsForWhichYouPlanToUseTheSolution
    });

    const savedPartnership = await partnership.save();

    res.status(200).json({
      success: true,
      message: 'Partnership created successfully',
      partnership: savedPartnership
    });
  }else {
      responseSent = true;
      return res.status(404).json(errors);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create partnership',
      error: error.message
    });
  }
};


const FetchAllPartnership = async (req, res) => {
  try {
    const partnerships = await partnershipModel.find();
    res.status(200).json({
      success: true,
      message: 'Partnerships fetched successfully',
      partnerships
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch partnerships',
      error: error.message
    });
  }
};
const FetchPartnerShipById = async (req, res) => {
  try {
    const partnershipId = req.params.id; // Assuming the ID is passed as a route parameter
    
    const partnership = await partnershipModel.findById(partnershipId);
    
    if (!partnership) {
      return res.status(404).json({
        success: false,
        message: 'Partnership not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Partnership fetched successfully',
      partnership
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch partnership',
      error: error.message
    });
  }
};

const AcceptPartnerShip = async (req, res) => {
  try {
    const partnershipId = req.params.id; // Assuming the ID is passed as a route parameter
    
    const partnership = await partnershipModel.findById(partnershipId);
    
    if (!partnership) {
      return res.status(404).json({
        success: false,
        message: 'Partnership not found'
      });
    }
    
    partnership.status = 'valid'; // Updating the status to 'valid'
    const updatedPartnership = await partnership.save();
    
    res.status(200).json({
      success: true,
      message: 'Partnership status updated successfully',
      partnership: updatedPartnership
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update partnership status',
      error: error.message
    });
  }
};

const createContactUS = async (req, res) => {
  const {errors, isValid} = validateContactUsInput(req.body)
  try {
    if (isValid) {
    const contactData = req.body; // Assuming the request body contains the contact data

    // Create a new instance of the ContactUs model
    const newContact = new ContactUsModel(contactData);

    // Save the new contact to the database
    const savedContact = await newContact.save();

    res.status(201).json({ message: 'Contact created successfully', contact: savedContact });
  }else {
    responseSent = true;
    return res.status(404).json(errors);
  }
  } catch (error) {
    res.status(500).json({ message: 'Failed to create contact', error: error.message });
  }
}
const FetchAllContactUs = async (req, res) => {
  try {
    const partnerships = await ContactUsModel.find();
    res.status(200).json({
      success: true,
      message: 'Contact Us fetched successfully',
      partnerships
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch Contacts',
      error: error.message
    });
  }
};

const FetchContactById = async (req, res) => {
  try {
    const contactUsID = req.params.id; // Assuming the ID is passed as a route parameter
    
    const contactUs = await ContactUsModel.findById(contactUsID);
    
    if (!contactUs) {
      return res.status(404).json({
        success: false,
        message: 'contactUs not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'contactUs fetched successfully',
      contactUs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contactUs',
      error: error.message
    });
  }
};

const MarkASReadedContactUs = async (req, res) => {
  try {
    const contactUSID = req.params.id; // Assuming the ID is passed as a route parameter
    
    const contactUS = await ContactUsModel.findById(contactUSID);
    
    if (!contactUS) {
      return res.status(404).json({
        success: false,
        message: 'contactUS not found'
      });
    }
    
    contactUS.status = 'readed'; // Updating the status to 'valid'
    const updatedContact = await contactUS.save();
    
    res.status(200).json({
      success: true,
      message: 'contactUS status updated successfully',
      partnership: updatedContact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update contactUS status',
      error: error.message
    });
  }
};


const createQuote = async(req, res)=>{
  
}




module.exports = 
{

  Addpartnership,
  FetchAllPartnership,
  FetchPartnerShipById,
  AcceptPartnerShip,
  createContactUS,
  FetchAllContactUs,
  FetchContactById,
  MarkASReadedContactUs
 
  
}