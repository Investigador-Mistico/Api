const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/cep/:cep", async (req, res) => {
    const { cep } = req.params;
        try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                        res.json(response.data);
                            } catch (error) {
                                    res.status(500).json({ error: "Erro ao buscar o CEP" });
                                        }
                                        });

                                        app.listen(PORT, () => {
                                            console.log(`Servidor rodando na porta ${PORT}`);
                                            });
                                            