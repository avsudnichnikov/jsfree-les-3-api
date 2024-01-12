module.exports = (req, res) => {
    res.status(404);
    const content = {code: 404, message: '404 | not found'};
    res.json(content);
};
