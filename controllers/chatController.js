const Chat = require("../model/chatModel");
const Message = require("../model/messagesModel");

module.exports = {
  async createOrGet(req, res) {
    const fromUser = req.user.userId;
    const toUser = req.body.toUser;
    try {
      let chat = await Chat.findOne({
        participants: { $all: [fromUser, toUser] },
      });

      if (!chat) {
        chat = await Chat.create({ participants: [fromUser, toUser] });
      }
      return res.status(200).json(chat);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async getAllChats(req, res) {
    const userId = req.user.userId;
    try {
      const chats = await Chat.find({ participants: userId })
        .populate("participants", "FullName")
        .sort({ updatedAt: -1 });

      return res.status(200).json(chats);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async sendMessage(req, res) {
    const { chatId } = req.params;
    const { message } = req.body;
    const sender = req.user.userId;

    try {
      const newMessage = await Message.create({
        chat: chatId,
        sender,
        message,
      });

      await Chat.findByIdAndUpdate(chatId, {
        lastMessage: message,
        lastMessageAt: new Date(),
      });

      return res.status(201).json(newMessage);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async getChatMessages(req, res) {
    const { chatId } = req.params;

    try {
      const messages = await Message.find({ chat: chatId })
        .populate("sender", "FullName")
        .sort({ createdAt: 1 });

      return res.status(200).json(messages);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async markAsRead(req, res){
    const { messageId } = req.params;

    try {
        const updatedMessage = await Message.findByIdAndUpdate(
            messageId,
            { isRead: true },
            { new: true }
        );

        return res.status(200).json(updatedMessage);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  }
};
