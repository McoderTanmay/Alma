import Chat from '../model/chatModel.js';
import Message from '../model/messagesModel.js';
import Alumni from '../model/alumniModel.js';
import Student from '../model/studentModel.js';

// Helper function to check if user is verified
const isUserVerified = async (userId) => {
    const alumni = await Alumni.findById(userId);
    const student = await Student.findById(userId);
    return alumni ? alumni.isVerified : student ? student.isVerified : false;
};

const createOrGetChat = async (req, res) => {
    try {
        const fromUser = req.user.userId;
        const toUser = req.body.toUser;

        if (!toUser) {
            return res.status(400).json({ message: 'Recipient user ID is required.' });
        }

        // Check if the user is verified
        const isVerified = await isUserVerified(fromUser);
        if (!isVerified) {
            return res.status(403).json({ message: 'You are not verified. Chat creation denied.' });
        }

        let chat = await Chat.findOne({
            participants: { $all: [fromUser, toUser] },
        });

        if (!chat) {
            chat = new Chat({ participants: [fromUser, toUser] });
            await chat.save();
        }

        res.status(200).json(chat);
    } catch (error) {
        console.error('Error creating or retrieving chat:', error);
        res.status(500).json({ message: 'An error occurred while creating or retrieving the chat.', error: error.message });
    }
};

const getAllChats = async (req, res) => {
    try {
        const userId = req.user.userId;

        // Check if the user is verified
        const isVerified = await isUserVerified(userId);
        if (!isVerified) {
            return res.status(403).json({ message: 'You are not verified. Chat access denied.' });
        }

        const chats = await Chat.find({ participants: userId })
            .populate('participants', 'FullName')
            .sort({ updatedAt: -1 });

        res.status(200).json(chats);
    } catch (error) {
        console.error('Error fetching chats:', error);
        res.status(500).json({ message: 'An error occurred while fetching chats.', error: error.message });
    }
};

const sendMessage = async (req, res) => {
    try {
        const { chatId } = req.params;
        const { message } = req.body;
        const sender = req.user.userId;

        if (!message) {
            return res.status(400).json({ message: 'Message content is required.' });
        }

        // Check if the sender is verified
        const isVerified = await isUserVerified(sender);
        if (!isVerified) {
            return res.status(403).json({ message: 'You are not verified. Message sending denied.' });
        }

        const newMessage = new Message({
            chat: chatId,
            sender,
            message,
        });
        await newMessage.save();

        await Chat.findByIdAndUpdate(chatId, {
            lastMessage: message,
            lastMessageAt: new Date(),
        });

        res.status(201).json({
            message: 'Message sent successfully!',
            newMessage,
        });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ message: 'An error occurred while sending the message.', error: error.message });
    }
};

const getChatMessages = async (req, res) => {
    try {
        const { chatId } = req.params;

        // Check if the user is verified
        const isVerified = await isUserVerified(req.user.userId);
        if (!isVerified) {
            return res.status(403).json({ message: 'You are not verified. Cannot access chat messages.' });
        }

        const messages = await Message.find({ chat: chatId })
            .populate('sender', 'FullName')
            .sort({ createdAt: 1 });

        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching chat messages:', error);
        res.status(500).json({ message: 'An error occurred while fetching chat messages.', error: error.message });
    }
};

const markMessageAsRead = async (req, res) => {
    try {
        const { messageId } = req.params;

        // Check if the user is verified
        const isVerified = await isUserVerified(req.user.userId);
        if (!isVerified) {
            return res.status(403).json({ message: 'You are not verified. Cannot mark message as read.' });
        }

        const updatedMessage = await Message.findByIdAndUpdate(
            messageId,
            { isRead: true },
            { new: true }
        );

        if (!updatedMessage) {
            return res.status(404).json({ message: 'Message not found.' });
        }

        res.status(200).json({
            message: 'Message marked as read successfully!',
            updatedMessage,
        });
    } catch (error) {
        console.error('Error marking message as read:', error);
        res.status(500).json({ message: 'An error occurred while marking the message as read.', error: error.message });
    }
};

export {
    createOrGetChat,
    getAllChats,
    sendMessage,
    getChatMessages,
    markMessageAsRead
};
