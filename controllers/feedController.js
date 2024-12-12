import alumni from '../model/alumniModel.js';
import student from '../model/studentModel.js';

const createAvailability = async (req, res) => {
    try {
        const { startDate, endDate, location, message } = req.body;
        const alumniId = req.user.userId; // Assuming req.user contains authenticated user's ID

        // Validate input
        if (!startDate || !endDate) {
            return res.status(400).json({
                message: 'Start date and end date are required.',
            });
        }

        // Find the alumni by ID and check if they are verified
        const updatedAlumni = await alumni.findById(alumniId);

        if (!updatedAlumni) {
            return res.status(404).json({
                message: 'Alumni not found.',
            });
        }

        if (!updatedAlumni.isVerified) {
            return res.status(403).json({
                message: 'You are not verified. You cannot update availability.',
            });
        }

        // Reset the availability field if verified
        updatedAlumni.availability = {
            isAvailable: true,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            location: location || '',
            message: message || '',
        };

        await updatedAlumni.save();

        res.status(200).json({
            message: 'Availability updated successfully!',
            alumni: updatedAlumni,
        });
    } catch (error) {
        console.error('Error updating availability:', error);
        res.status(500).json({
            message: 'An error occurred while updating availability.',
            error: error.message,
        });
    }
};

const profileMatching = async (req, res) => {
    const { skills, userType } = req.query;

    // Validate inputs
    if (!skills || skills.length === 0) {
        return res.status(400).json({
            code: 400,
            status: "failed",
            message: "No skills provided for matching. Please provide one or more skills."
        });
    }

    if (!userType || !['student', 'alumni'].includes(userType.toLowerCase())) {
        return res.status(400).json({
            code: 400,
            status: "failed",
            message: "Invalid or missing userType. Please provide 'student' or 'alumni'."
        });
    }

    try {
        const skillsArray = Array.isArray(skills) ? skills : skills.split(",").map(skill => skill.trim());

        // Determine the model based on userType
        const Model = userType.toLowerCase() === 'alumni' ? alumni : student;

        // Find matching profiles only if they are verified
        const matchedProfiles = await Model.find({
            skills: { $in: skillsArray },
            isVerified: true, // Ensure only verified profiles are considered
        });

        if (matchedProfiles.length === 0) {
            return res.status(404).json({
                code: 404,
                status: "failed",
                message: `No verified ${userType} found with the provided skills.`
            });
        }

        return res.status(200).json({
            code: 200,
            status: "success",
            message: `Matching verified ${userType} profiles found.`,
            data: matchedProfiles
        });
    } catch (error) {
        return res.status(500).json({
            code: 500,
            status: "failed",
            message: "An error occurred while matching profiles.",
            error: error.message
        });
    }
};

export {
    createAvailability,
    profileMatching
};
