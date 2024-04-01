import { Request, Response } from "express"
import userService from "../services/userService";

const UserController = {
    async getAllUsers(req: Request, res: Response){
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    },

    async getUserById(req: Request, res: Response){
        try {
            const { id } = req.params;
            const user = await userService.getUserById(id);
            if (!user) {
                res.status(404).json({ error: 'Usuário não encontrado' });
                return;
            }
            res.json(user);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    },

    async createUser(req: Request, res: Response){
        try {
            const { name, email } = req.body;
            const user = await userService.createUser(name, email);
            res.status(201).json(user);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    },

    async updateUser(req: Request, res: Response){
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const updatedUser = await userService.updateUser(id, name, email);
            if (!updatedUser) {
                res.status(404).json({ error: 'Usuário não encontrado' });
                return;
            }
            res.json(updatedUser);
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    },

    async deleteUser(req: Request, res: Response){
        try {
            const { id } = req.params;
            const deletedUser = await userService.deleteUser(id);
            if (!deletedUser) {
                res.status(404).json({ error: 'Usuário não encontrado' });
                return;
            }
            res.json({ message: 'Usuário excluído com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            res.status(500).json({ error: 'Erro ao excluir usuário' });
        }
    }
}

export default UserController;