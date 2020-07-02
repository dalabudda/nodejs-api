let reports = {};

reports.get = (req, res) => {
    //select report from database, prepare JSON and send
    res.send('This is reports GET');
};

reports.post = (req, res) => {
    res.send('This is reports POST');
};

module.exports = reports;