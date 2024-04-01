import User, { UserDocument } from "../models/userModel";

const userService = {
    async getAllUsers(): Promise<UserDocument[]> {
        try {
          const users = await User.find();
          return users;
        } catch (error) {
          throw new Error('Erro ao buscar usuários');
        }
    },

    async getUserById(userId: string): Promise<UserDocument | null> {
        try {
            const user = await User.findById(userId);
            return user;
        } catch (error) {
            throw new Error('Erro ao buscar usuário');
        }
    },

    async createUser(userData: Partial<UserDocument>): Promise<UserDocument> {
        try {
          const newUser = new User(userData);
          await newUser.save();
          return newUser;
        } catch (error) {
          throw new Error('Erro ao criar usuário');
        }
    },

    async updateUser(userId: string, userData: Partial<UserDocument>): Promise<UserDocument | null> {
        try {
          const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
          return updatedUser;
        } catch (error) {
          throw new Error('Erro ao atualizar usuário');
        }
    },

    async deleteUser(userId: string): Promise<void> {
        try {
          await User.findByIdAndDelete(userId);
        } catch (error) {
          throw new Error('Erro ao excluir usuário');
        }
    }
}

export default userService;