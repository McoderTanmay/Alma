
import Alumni from '../model/alumniModel.js';

const updateAvailability = async (req, res) => {
    try {
        const { startDate, endDate, location, message } = req.body;
        const alumniId = req.user.userId; // Assuming req.user contains authenticated user's ID

        // Validate input
        if (!startDate || !endDate) {
            return res.status(400).json({
                message: 'Start date and end date are required.',
            });
        }

        // Find the alumni by ID and reset the availability field
        const updatedAlumni = await Alumni.findByIdAndUpdate(
            alumniId,
            {
                $set: {
                    availability: {
                        isAvailable: true,
                        startDate: new Date(startDate),
                        endDate: new Date(endDate),
                        location: location || '',
                        message: message || '',
                    },
                },
            },
            { new: true } // Return the updated document
        );

        // Check if alumni was found
        if (!updatedAlumni) {
            return res.status(404).json({
                message: 'Alumni not found.',
            });
        }

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

export {
    updateAvailability
};